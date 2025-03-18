let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserta un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  verAmigos();
}

function verAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear aleatoriamente.");
  } else if (amigos.length === 1) {
    alert("Debes agregar al menos 2 amigos para realizar el sorteo.");
  } else {
    const seleccionAleatoria = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[seleccionAleatoria];

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "Tu amigo secreto es: " + amigoSeleccionado;
  }
}
