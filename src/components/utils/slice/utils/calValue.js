export function CalcValue(arr) {
    if(!arr.length) return 0;

    const totalValue = arr.reduce((prev, current) => {
        let itemPrice = current.price * current.qtd;
        let acc = prev.price ? prev.price * prev.qtd : prev;

        if(current.discount) itemPrice = itemPrice * (current.discount / 100)

        acc += itemPrice;
        
        return acc
    })

    return totalValue
}