import { useSelector } from "react-redux";
import { priceHandler } from "../../../main/components/products/utils";
import { CarrinhoItemComponent } from "./components/carrinhoItem/carrinhoItem";
import { Link } from "react-router-dom";
import "./carrinho.scss";

export function CarrinhoComponent() {
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
          <button className="buy">buy now!</button>
        </Link>
      </div>
    </div>
  );
}
