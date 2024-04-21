import { useSelector } from "react-redux";
import { FavItemComponent } from "./components/favItem/favItem";
import "./fav.scss";

export function FavsComponent() {
  const fav = useSelector((state) => state.fav);

  return (
    <div className="carrinho-container">
      <div className="itens-container">
        {fav.list.map((item, index) => {
          return <FavItemComponent item={item} index={index} />;
        })}
      </div>
    </div>
  );
}
