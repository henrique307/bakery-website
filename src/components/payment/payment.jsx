import { useLocation } from "react-router-dom";
import { FooterComponent } from "../footer/footer";
import { priceHandler } from "../main/components/products/utils";
import { Link } from "react-router-dom";
import "./payment.scss";

export function PaymentComponent(props) {
  const carrinho = useLocation().state;

  console.log(carrinho);

  //   {
  //     url: "https://carami-store-demo.myshopify.com/cdn/shop/products/18_85e0afa9-9ef6-4a13-ba4c-33a9f5d9de72.jpg?v=1593664281",
  //     onCart: 0,
  //     fav: 0,
  //     id: "74235",
  //     description:
  //       "Brigadeiro Delicadamente redondo, o brigadeiro tradicional é uma explosão de sabor em cada mordida. Coberto com granulados de chocolate ou cacau em pó, sua textura é macia e cremosa, derretendo na boca como uma nuvem de chocolate. Feito com uma mistura perfeita de leite condensado, cacau em pó e manteiga, esse doce brasileiro é uma verdadeira tentação para os amantes de chocolate. Com uma casquinha crocante por fora e um centro suave e indulgente, o brigadeiro é uma obra-prima da confeitaria que conquista paladares ao redor do mundo.",
  //     name: "Vanila Cupcakes",
  //     price: 20.9,
  //   },

  return (
    <>
      <section className="payment">
        <div className="payment-container">
          <Link to={"/bakery-website"}>
            <span className="back">back</span>
          </Link>
          <h1 className="payment-title text-3xl">Your Cart</h1>
          <div className="cart-container">
            <div className="cart-list">
              {carrinho.items.map((item) => {
                return (
                  <div className="cart-item">
                    <img src={item.url} alt={item.name} />
                    <div className="item-info">
                      <h1 className="info-name text-lg">{item.name}</h1>
                      <span className="info-id text-sm">Id: {item.id}</span>
                      <span className="info-price text-sm">
                        {priceHandler(item.price)}
                      </span>
                    </div>
                    <div className="item-total">
                      <span className="total">
                        {priceHandler(item.price * item.qtd)}
                      </span>
                      {item.discount ? (
                        <span className="sub-total">
                          {item.price * item.qtd}
                        </span>
                      ) : null}
                      <div className="item-qtd">
                      <input
                        defaultValue={item.qtd}
                        className="qtd"
                        type="number"
                        name="qtd"
                        id="qtd"
                      />
                    </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-total">
              <h1 className="total-title text-2xl">Cart totals</h1>
              <div className="total-summary">
                {carrinho.items.map((item) => {
                  return (
                    <div className="summary-item">
                      <div className="name-qtd">
                        <span className="summary-name">{item.name}</span>
                        <span className="summary-qtd text-sm">{item.qtd}x</span>
                      </div>
                      <span className="summary-price">
                        {priceHandler(item.price * item.qtd)}
                      </span>
                      {item.discount ? (
                        <span className="summary-discount">{item.price}</span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
              <div className="total-container">
                <span className="total-tag">Total</span>
                <span className="total-price">{priceHandler(carrinho.valorTotal)}</span>
              </div>
              <button className="action-button">Pay now</button>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
