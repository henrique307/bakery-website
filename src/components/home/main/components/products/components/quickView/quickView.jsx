import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState, useEffect, createRef } from "react";
import { Close } from "../../../../../../../icons";
import { InputComponent } from "../../../../../../utils/qtd-input/qtdInput";
import {
  discountHandler,
  priceHandler,
  main_carousel_splideOptions,
  thumb_carousel_splideOptions,
} from "../../utils";
import { addItem } from "../../../../../../utils/slice/slices";

import "./quickView.scss";
import React from "react";
import { useDispatch } from "react-redux";

export function QuickViewComponent({
  display,
  product,
  productList,
  setQuickView,
}) {
  const refs = {
    mainRef: createRef(Splide),
    thumbRef: createRef(Splide),
  };

  const [productQtd, setProductQtd] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      refs.mainRef.current &&
      refs.thumbRef.current &&
      refs.thumbRef.current.splide
    ) {
      refs.mainRef.current.sync(refs.thumbRef.current.splide);
    }
  }, []);

  useEffect(() => {
    refs.thumbRef.current.splide.go(product.index);
    // refs.mainRef.current.splide.go(product.index);
  }, [product]);

  function closeDetails() {
    setQuickView(false);
  }

  function addToCart() {
    dispatch(addItem({ ...product, qtd: productQtd }));
    closeDetails();
  }

  return (
    <section hidden={!display} className="quickView">
      <div
        className={`overlay`}
        style={{ display: product.name === "" ? "none" : "" }}
        onClick={closeDetails}
      ></div>
      <div
        className={`product-quickview`}
        style={{ display: product.name === "" ? "none" : "" }}
      >
        <Close onClick={closeDetails} />
        <div className="product-pictures">
          <div className="slides">
            <Splide ref={refs.mainRef} options={main_carousel_splideOptions}>
              {productList.map((product, key) => {
                return (
                  <SplideSlide key={key}>
                    {product.discount ? (
                      <div className="discount-tag">-{product.discount}%</div>
                    ) : null}
                    <img
                      className={`img ${key}`}
                      src={product.url}
                      alt={product.name}
                    />
                  </SplideSlide>
                );
              })}
            </Splide>
            <Splide ref={refs.thumbRef} options={thumb_carousel_splideOptions}>
              {productList.map((product, key) => {
                return (
                  <SplideSlide key={key}>
                    {product.discount ? (
                      <div className="discount-indicator"></div>
                    ) : null}
                    <img
                      onClick={() => setQuickView({ ...product, index: key })}
                      className={`product ${key}`}
                      src={product.url}
                      alt={product.name}
                    />
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
        <div className="product-infos">
          <div className="product-header">
            <h1 className="product-title text-xl">{product.name}</h1>
            <span className="product-price text-sm">
              {product.discount ? (
                <>
                  <span className="price text-sm">
                    {discountHandler(product)}
                  </span>
                  <span className="price text-sm discount">
                    {product.price ? priceHandler(product.price) : ""}
                  </span>
                </>
              ) : (
                <span className="price text-sm">
                  {product.price ? priceHandler(product.price) : ""}
                </span>
              )}
            </span>
          </div>
          <div className="product-cart">
            <article>{product.description}</article>
            <div className="product-action">
              <InputComponent
                qtd={productQtd}
                increase={() => setProductQtd(productQtd + 1)}
                decrease={() => setProductQtd(productQtd - 1)}
              />
              <button
                onClick={() => addToCart({ ...product, qtd: productQtd })}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
