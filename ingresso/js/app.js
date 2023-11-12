function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'pista'){
        comprarPista(qtd);
    } else {
        if (tipoIngresso == 'superior'){
            comprarSuperior(qtd);
        } else {
            comprarInferior(qtd);
        }
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista){
        alert(`Não e possivel efetuar a compra! Quantidade de ingressos solicitados maior que o diponivel `);
    } else {
        qtdPista -= qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert(`Compra realizada com sucesso!`);
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior){
        alert(`Não e possivel efetuar a compra! Quantidade de ingressos solicitados maior que o diponivel `);
    } else {
        qtdSuperior -= qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert(`Compra realizada com sucesso!`);
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior){
        alert(`Não e possivel efetuar a compra! Quantidade de ingressos solicitados maior que o diponivel `);
    } else {
        qtdInferior -= qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert(`Compra realizada com sucesso!`);
    }
}