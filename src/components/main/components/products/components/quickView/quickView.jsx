import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState, useEffect, createRef } from "react";
import { Close } from "../../../../../../icons";
import {
  discountHandler,
  priceHandler,
  main_carousel_splideOptions,
  thumb_carousel_splideOptions,
} from "../../utils";
import { addItem } from "../../../../../utils/slice/slices";

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
              <div
                className="input-container py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg"
                data-hs-input-number=""
              >
                <div className="flex items-center gap-x-1.5">
                  <button
                    onClick={() => setProductQtd(productQtd - 1)}
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                    data-hs-input-number-decrement="product"
                  >
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  <input
                    value={productQtd}
                    onChange={(e) => setProductQtd(e.target.value)}
                    className="quickview-input p-0 w-6 bg-transparent border-0 text-black-800 text-center focus:ring-0 dark:text-black"
                    type="text"
                    data-hs-input-number-input="product"
                  />
                  <button
                    onClick={() => setProductQtd(productQtd + 1)}
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                    data-hs-input-number-increment="product"
                  >
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
              </div>
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
