import { useDispatch } from "react-redux";
import { changeValue, removeItem } from "../../../../../../utils/slice/slices";
import {
  discountHandler,
  priceHandler,
} from "../../../../../main/components/products/utils";
import { InputComponent } from "../../../../../../utils/qtd-input/qtdInput";
import { Trash } from "../../../../../../../icons";

export function CarrinhoItemComponent({ item, index }) {
  const dispatch = useDispatch();

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
            <span className="price">{priceHandler(item.price * item.qtd)}</span>
          )}
        </div>
        <div className="actions">
          <InputComponent
            qtd={item.qtd}
            increase={() =>
              dispatch(changeValue({ id: item.id, qtd: item.qtd + 1 }))
            }
            decrease={() =>
              dispatch(changeValue({ id: item.id, qtd: item.qtd - 1 }))
            }
          />
          <Trash
            onClick={() => {
              dispatch(removeItem(item.id));
            }}
          />
        </div>
      </div>
    </div>
  );
}
