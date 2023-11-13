let listaAmigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let amigos = document.getElementById('lista-amigos');

    if (amigo.value == ''){
        alert('Informe um nome antes de adicionar');
        return;
    }

    if (listaAmigos.includes(amigo.value)){
        alert('Nome ja existe em nossa lista, tente outro');
        return;
    }

    listaAmigos.push(amigo.value);
    amigos.textContent += amigos.textContent == '' ? amigo.value : ', ' + amigo.value;

    amigo.value = '';
}

function sortear(){
    if (listaAmigos.length < 3){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    embaralhar(listaAmigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < listaAmigos.length; i++){
        if (i == listaAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] +' --> ' +listaAmigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] +' --> ' +listaAmigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

