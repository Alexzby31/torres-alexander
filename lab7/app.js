const express = require('express');
const app = express();

// Función para generar un array de la serie Fibonacci
function fibonacciArray(n) {
    const fibonacciArray = [];
    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            fibonacciArray.push(i);
        } else {
            fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
        }
    }
    return fibonacciArray;
}

// Endpoint para calcular el número de Fibonacci
app.get('/fibonacci/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const result = fibonacciArray(number);
    res.json(result );
});

// Puerto en el que escucha el servidor
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
