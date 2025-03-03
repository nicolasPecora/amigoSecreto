// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crea una lista vacía para almacenar los nombres de amigos
let listaAmigos = [];

// Función para añadir el nombre del amigo
function agregarAmigo() {
    // Obtén el valor del input
    const inputAmigo = document.getElementById('amigo').value;

    // Añade el nombre del amigo a la lista
    listaAmigos.push(inputAmigo);

    // Actualiza la lista en el HTML
    actualizarListaAmigos();
}

// Función para actualizar la lista en el HTML
function actualizarListaAmigos() {
    // Obtén el elemento de la lista en el HTML
    const listaElementos = document.getElementById('listaAmigos');

    // Limpia la lista
    listaElementos.innerHTML = '';

    // Recorre la lista de nombres de amigos y crea elementos de lista
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElementos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Muestra el resultado en la lista de resultados
    const resultadoElementos = document.getElementById('resultado');
    resultadoElementos.innerHTML = `<li>${amigoSorteado}</li>`;
}
