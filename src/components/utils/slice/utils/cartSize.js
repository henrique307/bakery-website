export function cartSize(items) {
    let somatorio = 0;  

    items.forEach(item => {
        somatorio += item.qtd
    });
    
    console.log(items, somatorio)

    return somatorio;
}