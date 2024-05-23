import { mostrarResultado } from './moduloResultado.js';

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const color = document.getElementById('color').value;

    // Obtener los valores almacenados previamente o inicializar un array vacío si no hay valores
    let datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];

    // Agregar el nuevo objeto con nombre y color al array
    datosGuardados.push({ nombre, color });

    // Guardar el array en localStorage
     localStorage.setItem('datos', JSON.stringify(datosGuardados));

    // Mostrar el resultado
    mostrarResultado();

  });
});
