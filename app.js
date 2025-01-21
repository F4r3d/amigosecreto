let listaNomes = [];
let lista = document.querySelector('h2');

function adicionarNome() {
    let nome = document.querySelector('input').value;
    if (nome == "") {
    alert('Por favor, digite um nome!');
    } else {
        listaNomes.push(nome);
    }
    lista.innerHTML = listaNomes
    document.getElementById('play').removeAttribute('disabled');
    limparNome()
}

function limparNome() {
    nome = document.querySelector('input');
    nome.value = '';
}

function sortearAmigoSecreto() {
    let participantes = listaNomes.length;
    if (participantes == 0) {
        lista.innerHTML = "O sorteio está encerrado !";
    } else {
        let numeroIndice = parseInt(Math.random() * participantes);
        let amigoSecreto = listaNomes[numeroIndice];
        lista.innerHTML = "O(A) amigo(a) secreto(a) é: " + amigoSecreto + " !";
        listaNomes.splice(numeroIndice, 1);
    }

}


