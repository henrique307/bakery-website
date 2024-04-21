export function CalcValue(produtos) {
    let somatorio = 0;
  
    produtos.forEach(produto => {
      if (produto.discount !== undefined && produto.discount > 0) {
        const precoComDesconto = produto.price * (1 - produto.discount / 100);
        const valorTotal = precoComDesconto * produto.qtd;
        somatorio += valorTotal;
      } else {
        const valorTotal = produto.price * produto.qtd;
        somatorio += valorTotal;
      }
    });
  
    return somatorio;
  }