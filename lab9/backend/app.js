const express = require('express');
const cors = require('cors')
const app = express();

// Puerto en el que escucha el servidor
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());

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
app.get('/', (req, res) => {
    res.json({ message: 'Please use a POST request instead.' });
});

app.post('/',(req,res) =>{
    const {number="5"} = req.body;
    const result = fibonacciArray(number);
    res.json(result);
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
