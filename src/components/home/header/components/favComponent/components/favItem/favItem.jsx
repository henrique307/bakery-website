import { useDispatch } from "react-redux";
import {
  discountHandler,
  priceHandler,
} from "../../../../../../home/main/components/products/utils";
import { FailIcon } from "../../../../../../../icons";
import { favToggle } from "../../../../../../utils/slice/slices";
import "./favItem.scss";

export function FavItemComponent({ item, index }) {

  const dispatch = useDispatch();
  return (
    <div className="item" key={index}>
      <div className="img-container" onClick={() => dispatch(favToggle(item))}>
        <FailIcon />
        <img src={item.url} alt={item.name} />
      </div>
      <div className="info">
        <span className="name">{item.name}</span>
        <div className="price-container">
          {item.discount ? (
            <>
              <span className="price text-sm">
                {discountHandler({
                  ...item,
                  price: item.price,
                })}
              </span>
              <span className="price text-sm discount">
                {priceHandler(item.price)}
              </span>
            </>
          ) : (
            <span className="price">{priceHandler(item.price)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
