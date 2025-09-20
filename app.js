let arrayAmigos = [];
let nuevoAmigo = document.getElementById('amigo');
let list = document.getElementById('listaAmigos');

function agregarAmigo() {
    let nombre = nuevoAmigo.value;
    console.log(nombre);

    if (nombre === "") {
        alert('Por favor, inserte un nombre.');
        return;
    }

    arrayAmigos.push(nombre);

    list.innerHTML = "";
    for (let i = 0; i< arrayAmigos.length; i++){
        list.innerHTML += "<li>" + arrayAmigos [i] + "</li>"
    }

    nuevoAmigo.value = "";
    nuevoAmigo.focus();

    console.log(arrayAmigos);
}


function sortearAmigo() {
    if (arrayAmigos.length === 0) {
        alert ('No hay amigos en la lista para sortear');
        return;
    }

    let indice = Math.floor (Math.random() * arrayAmigos.length);
    let nombreElegido = arrayAmigos[indice];
    console.log('El elegido es:' + nombreElegido);
    alert('El amigo elegido es:' + nombreElegido);
}

nuevoAmigo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") agregarAmigo();
});
