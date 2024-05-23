export function mostrarResultado() {
    let datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];
  
    let mensaje = '<h2>Datos guardados:</h2>';
    datosGuardados.forEach(function(item) {
      mensaje += `<p>Hola, ${item.nombre}! Tu color elegido es: <span style="color:${item.color}">${item.color}</span>.</p>`;
    });
  
    document.getElementById('resultado').innerHTML = mensaje;
  }
  