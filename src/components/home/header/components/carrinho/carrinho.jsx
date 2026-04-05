import { useSelector } from "react-redux";
import { priceHandler } from "../../../main/components/products/utils";
import { CarrinhoItemComponent } from "./components/carrinhoItem/carrinhoItem";
import { Link } from "react-router-dom";
import "./carrinho.scss";
import { HashLink } from "react-router-hash-link";

export function CarrinhoComponent({ closeCarrinhoTab }) {
  const carrinho = useSelector((state) => state.carrinho);
  const btnText = carrinho.items.length ? "Buy now!" : "Add to cart!";
  const redirect = carrinho.items.length ? "payment" : "#products";
  const LinkComponent = carrinho.items.length ? Link : HashLink;

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
        <LinkComponent to={redirect} state={carrinho}>
          <button onClick={closeCarrinhoTab} className="buy">{btnText}</button>
        </LinkComponent>
      </div>
    </div>
  );
}
