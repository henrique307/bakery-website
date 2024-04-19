

export function priceHandler(price) {
    if (typeof price !== "number") price = price.price
    return price ? `R$ ${price.toFixed(2).toString().replace(".", ",")}` : `R$ 0,00`
}

export function discountHandler({ price, discount }) {

    const discountValue = price * (discount / 100)

    return `R$ ${(price - discountValue)
        .toFixed(2)
        .toString()
        .replace(".", ",")}`;
}


export const main_carousel_splideOptions = {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
};

export const thumb_carousel_splideOptions = {
    perPage: 3,
    focus: "center",
    gap: 10,
    type: "loop",
    pagination: false,
    arrows: false,
    isNavigation: true,
};
