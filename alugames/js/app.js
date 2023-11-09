function alterarStatus(id){
    let gameEscolhido = document.getElementById(`game-${id}`);
    let imagem = gameEscolhido.querySelector('.dashboard__item__img');
    let botao = gameEscolhido.querySelector('.dashboard__item__button');
    let nomeDoJogo = gameEscolhido.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }

}

