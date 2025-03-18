# challenge-amigo-secreto_esp-main


# Amigo Secreto

Una aplicación sencilla en JavaScript para sortear aleatoriamente un "amigo secreto". La idea es que se puedan ingresar nombres de amigos, ver la lista actualizada en pantalla y sortear aleatoriamente que salga elegido uno de.

## Características 🚀

- **Agregar amigos:** Ingresa nombres y agrégalos a la lista.
- **Mostrar lista de amigos:** Visualiza todos los nombres ingresados.
- **Sorteo aleatorio:** Utiliza `Math.random()` y `Math.floor()` para seleccionar al azar uno de los amigos.

## Instalación 📦

- **Clonar el repositorio**

     git clone https://github.com/tu-usuario/amigo-secreto.git
     cd amigo-secreto


## Uso 🛠️

1. Abre el archivo `index.html` en tu navegador o live server en vscode.
2. en el input, ingresa un nombre y haz clic en el botón "Añadir".
3. Los nombres se agregarán a la lista de la página.
4. Cuando quieras sortearlos para que salga un amigo, haz clic en "Sortear amigo" y el resultado saldrá más abajo.


## Posibles Problemas y Soluciones ❌

*Aunque debieran de encontrarse bien todos estos puntos, en caso de error, revisalos para estar seguro.*

1. Los nombres no aparecen en la lista.

Asegúrate de que la función verAmigos() se está llamando después de agregarAmigo().

Verifica en la consola del navegador (F12 > Console) si hay errores que se reflejen en el JavaScript.

2. No se puede sortear un amigo.

Asegúrate de haber agregado al menos 1 nombre antes de hacer el sorteo.

3. El diseño no se ve bien.

Verifica que el archivo style.css está correctamente enlazado en index.html.

##### *Hecho por Nicolás Valderrama*