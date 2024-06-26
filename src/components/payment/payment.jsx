import { useSelector } from "react-redux";
import { useCallback } from "react";
import { FooterComponent } from "../home/footer/footer";
import {
  discountHandler,
  priceHandler,
} from "../home/main/components/products/utils";
import { stripeInstance } from "../../index";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { Link, Navigate, redirect } from "react-router-dom";
import "./payment.scss";

export function PaymentComponent() {
  const carrinho = useSelector((state) => state.carrinho);

  const fetchClientSecret = useCallback(async () => {
    const domain = "https://henrique307.github.io/bakery-website";
    
    const session = await stripeInstance.checkout.sessions
      .create({
        ui_mode: "embedded",
        ...defineBody(carrinho),
        payment_method_types: ["card"], //'pix', 'paypal', 'boleto'
        mode: "payment",
        return_url: `${domain}/#/return?session_id={CHECKOUT_SESSION_ID}`,
      })
      .catch((e) => {
        return e;
      });

    return session.client_secret;
  }, [carrinho]);

  if(!carrinho.items.length) {
    return <Navigate to="/" />
  }

  function defineBody(carrinho) {
    const body = {
      line_items: carrinho.items.map((item) => {
        return {
          price: item.id,
          quantity: item.qtd,
        };
      }),
    };

    carrinho.items.forEach((item) => {
      if (!!item.discount) {
        Object.assign(body, { discounts: [{ coupon: item.coupon }] });
      }
    });

    return body;
  }

  const options = { fetchClientSecret };

  const stripePromise = loadStripe(
    "pk_test_51OO0ZwCaFt3tFYFTOTwy7kBFqBTW9wAMtC1dI7QkL8sDniIrNLnfnb3u7Q6k6pYM1UO9vBieerj186UYZdgjdShT00u77hCHKb"
  );

  return (
    <>
      <section className="payment">
        <div className="payment-container">
          <Link to={"/"}>
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
                      <div className="info-price-container">
                        {item.discount ? (
                          <>
                            <span className="info-price">
                              {discountHandler({
                                price: item.price,
                                discount: item.discount,
                              })}
                            </span>
                            <span className="old-price">
                              {priceHandler(item.price)}
                            </span>
                          </>
                        ) : (
                          <span className="info-price">
                            {priceHandler(item.price)}
                          </span>
                        )}
                      </div>
                      <span className="item-qtd">x{item.qtd}</span>
                    </div>
                    <div className="item-total">
                      <div className="price-container">
                        {item.discount ? (
                          <>
                            <span className="total">
                              {discountHandler({
                                price: item.price * item.qtd,
                                discount: item.discount,
                              })}
                            </span>
                            <span className="old-total">
                              {priceHandler(item.price * item.qtd)}
                            </span>
                          </>
                        ) : (
                          <span className="total">
                            {priceHandler(item.price * item.qtd)}
                          </span>
                        )}
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
                      <div className="summary-price-container">
                        {item.discount ? (
                          <span className="summary-price">
                            {discountHandler({
                              price: item.price * item.qtd,
                              discount: item.discount,
                            })}
                          </span>
                        ) : (
                          <span className="summary-price">
                            {priceHandler(item.price * item.qtd)}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="total-container">
                <span className="total-tag">Total</span>
                <span className="total-price">
                  {priceHandler(carrinho.valorTotal)}
                </span>
              </div>
              <button
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="action-button"
              >
                Pay now
              </button>
            </div>
          </div>
        </div>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <span>Cartão-teste: 4242 4242 4242 4242</span>
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </section>
      <FooterComponent />
    </>
  );
}
