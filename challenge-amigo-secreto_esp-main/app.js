let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Se hace push() del nombre al array
  amigos.push(nombre);

  // Limpia el campo para ingresar un nuevo amigo
  input.value = "";

  // Actualiza la lista visible en el HTML
  mostrarAmigos();
}

function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista
  lista.innerHTML = "";

  // Iterar el arreglo de amigos y crea un <li> para cada uno
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
