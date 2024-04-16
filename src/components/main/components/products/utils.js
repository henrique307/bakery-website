

export function priceHandler(price) {
    return `R$ ${price.toFixed(2).toString().replace(".", ",")}`;
}

export function discountHandler({ price, discount }) {
    return `R$ ${(price * (discount / 100))
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
    isNavigation: true,
};
