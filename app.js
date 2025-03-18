let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserta un nombre.");
    return;
  }

  // Se hace push() del nombre al array
  amigos.push(nombre);

  // Limpia el campo para ingresar un nuevo amigo
  input.value = "";

  // Actualiza la lista visible en el HTML
  verAmigos();
}

function verAmigos() {
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

function sortearAmigo() {
    // Validar que existan amigos ingresados
    if (amigos.length === 0) {
      alert("No hay amigos disponibles para sortear aleatoriamente.");
      return;
    }
  
    // Hace la selección aleatoria usando Math.random() y Math.floor()
    const seleccionAleatoria = Math.floor(Math.random() * amigos.length);
  
    // Obtiene el nombre 
    const amigoSeleccionado = amigos[seleccionAleatoria];
  
    // Muestra el resultado actualizando el contenido del elemento con id "resultado"
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "Tu amigo secreto es: " + amigoSeleccionado;
  }
