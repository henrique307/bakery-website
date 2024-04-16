import {
  discountHandler,
  priceHandler,
} from "../../../main/components/products/utils";
import { Trash } from "../../../../icons";
import "./carrinho.scss";

export function CarrinhoComponent({ carrinho, setCarrinho }) {
  // {
  //     url: "https://carami-store-demo.myshopify.com/cdn/shop/items/18_85e0afa9-9ef6-4a13-ba4c-33a9f5d9de72.jpg?v=1593664281",
  //     description:
  //       "Brigadeiro Delicadamente redondo, o brigadeiro tradicional é uma explosão de sabor em cada mordida. Coberto com granulados de chocolate ou cacau em pó, sua textura é macia e cremosa, derretendo na boca como uma nuvem de chocolate. Feito com uma mistura perfeita de leite condensado, cacau em pó e manteiga, esse doce brasileiro é uma verdadeira tentação para os amantes de chocolate. Com uma casquinha crocante por fora e um centro suave e indulgente, o brigadeiro é uma obra-prima da confeitaria que conquista paladares ao redor do mundo.",
  //     name: "Vanila Cupcakes",
  //     price: 20.9,
  //     discount: 34,
  //     qtd: 3,
  //   },

  function removeItem(item) {
    const novoCarrinho = carrinho.filter((i) => i !== item);

    console.log(novoCarrinho.length);
    setCarrinho(novoCarrinho);
  }

  function changeCarrinho(item) {
    const currentItem = carrinho.find((it) => item.name === it.name);
    const newCarrinho = [...carrinho];

    // console.log(currentItem)

    // setCarrinho([...carrinho, {item}])
  }

  function getTotal(arr) {
    return arr.reduce((acc, item) =>
      acc.price ? acc.price + item.price : acc + item.price
    );
  }

  return (
    <div className="carrinho-container">
      <div className="itens-container">
        {carrinho.map((item, index) => {
          return (
            <div className="item" key={index}>
              <img src={item.url} alt={item.name} />
              <div className="info">
                <span className="name">{item.name}</span>
                <div className="price-container">
                  {item.discount ? (
                    <>
                      <span className="price text-sm">
                        {discountHandler({
                          ...item,
                          price: item.price * item.qtd,
                        })}
                      </span>
                      <span className="price text-sm discount">
                        {priceHandler(item.price * item.qtd)}
                      </span>
                    </>
                  ) : (
                    <span className="price">
                      {priceHandler(item.price * item.qtd)}
                    </span>
                  )}
                </div>
                <div className="actions">
                  <input
                    className="qtd"
                    type="number"
                    value={item.qtd}
                    onChange={() => changeCarrinho(item)}
                  />
                  <Trash onClick={() => removeItem(item)} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buy-container">
        <span className="total">Total:<span className="price">{priceHandler(getTotal(carrinho))}</span></span>
        <button className="buy">buy now!</button>
      </div>
    </div>
  );
}
