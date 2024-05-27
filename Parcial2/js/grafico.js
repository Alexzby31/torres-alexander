// grafico.js

window.dibujarGrafico = function(totalEntradas, totalSalidas) {
    // Obtener el canvas
    var canvas = document.getElementById('moneyChart');
    var ctx = canvas.getContext('2d');

    // Calcular el centro del canvas
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = Math.min(centerX, centerY); // radio igual al menor de los dos valores

    // Calcular los porcentajes
    var total = totalEntradas + totalSalidas;
    var porcentajeEntradas = (totalEntradas / total) * 100;
    var porcentajeSalidas = (totalSalidas / total) * 100;

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el segmento de entradas
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2 * (porcentajeEntradas / 100), false);
    ctx.closePath();
    ctx.fillStyle = '#36a2eb'; // Color azul para las entradas
    ctx.fill();

    // Dibujar el segmento de salidas
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, Math.PI * 2 * (porcentajeEntradas / 100), Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = '#ff6384'; // Color rojo para las salidas
    ctx.fill();

    // Dibujar las leyendas a la izquierda de la página
    ctx.font = '14px Arial';
    ctx.fillStyle = '#000'; // Color de la leyenda
    
    var offsetX = 20; // Desplazamiento horizontal
    var offsetY = centerY - 20; // Desplazamiento vertical
    
    var entradaX = offsetX;
    var entradaY = offsetY - 20;
    
    var salidaX = offsetX;
    var salidaY = offsetY + 20;

    // Dibujar las leyendas a la izquierda de la página
    ctx.fillText('Entradas', entradaX, entradaY);
    ctx.fillStyle = '#36a2eb'; // Color azul para las entradas
    ctx.fillRect(entradaX + 100, entradaY - 20, 20, 20);
    
    ctx.fillStyle = '#000'; // Color de la leyenda
    ctx.fillText('Salidas', salidaX, salidaY);
    ctx.fillStyle = '#ff6384'; // Color rojo para las salidas
    ctx.fillRect(salidaX + 100, salidaY - 20, 20, 20);
};






