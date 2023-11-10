let valorTotalCarrinho = 0;


function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    let valorTotal = valorProduto * quantidade;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal}</span>
  </section>`; 

    valorTotalCarrinho += valorTotal;
    let campoTotalCarrinho = document.getElementById('valor-total');
    campoTotalCarrinho.textContent = `R$${valorTotalCarrinho}`;

    document.getElementById('quantidade').value = 0;
}

function limpar(){
    valorTotalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}