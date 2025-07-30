let listaDeAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo");
    if (amigo.value != "") {
        listaDeAmigos.push(amigo.value);
        amigo.value = "";
        mostrarAmigos();
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function mostrarAmigos() {
    let amigos = "";
    for (let amigo in listaDeAmigos) {
        amigos += "<li>" + listaDeAmigos[amigo] + "</li>";
    }
    document.getElementById("listaAmigos").innerHTML = amigos;
}

function sortearAmigo() {
    let numeroDeAmigos = listaDeAmigos.length;
    if (numeroDeAmigos > 0) {
        let amigoElegido = Math.floor(Math.random() * numeroDeAmigos);
        document.getElementById("resultado").innerHTML = listaDeAmigos[amigoElegido];
    } else {
        alert("Debe agregar el nombre de un amigo antes de elegir uno.");
    }
}