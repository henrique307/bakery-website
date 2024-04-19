import { useSelector } from "react-redux";
import { priceHandler } from "../../../main/components/products/utils";
import { CarrinhoItemComponent } from "./components/carrinhoItem/carrinhoItem";
import { Link } from "react-router-dom";
import "./carrinho.scss";

export function CarrinhoComponent() {
  // {
  //     url: "https://carami-store-demo.myshopify.com/cdn/shop/items/18_85e0afa9-9ef6-4a13-ba4c-33a9f5d9de72.jpg?v=1593664281",
  //     description:
  //       "Brigadeiro Delicadamente redondo, o brigadeiro tradicional é uma explosão de sabor em cada mordida. Coberto com granulados de chocolate ou cacau em pó, sua textura é macia e cremosa, derretendo na boca como uma nuvem de chocolate. Feito com uma mistura perfeita de leite condensado, cacau em pó e manteiga, esse doce brasileiro é uma verdadeira tentação para os amantes de chocolate. Com uma casquinha crocante por fora e um centro suave e indulgente, o brigadeiro é uma obra-prima da confeitaria que conquista paladares ao redor do mundo.",
  //     name: "Vanila Cupcakes",
  //     price: 20.9,
  //     discount: 34,
  //     qtd: 3,
  //   },

  const carrinho = useSelector((state) => state.carrinho);

  return (
    <div className="carrinho-container">
      <div className="itens-container">
        {carrinho.items.map((item, index) => {
          return <CarrinhoItemComponent item={item} index={index} />;
        })}
      </div>
      <div className="buy-container">
        <span className="total">
          Total:
          <span className="price">{priceHandler(carrinho.valorTotal)}</span>
        </span>
        <Link to={"/bakery-website/payment"} state={carrinho}>
          <button className="buy">
            buy now!
          </button>
        </Link>
      </div>
    </div>
  );
}
