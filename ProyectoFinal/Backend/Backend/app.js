const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const users = require ('./routes/users.js');
const cliente = require ('./routes/cliente.js');
const ropa = require ('./routes/ropa.js');
const delivery = require ('./routes/delivery.js');
const lavanderia = require ('./routes/lavanderia.js');
const pedido = require ('./routes/pedido.js');
const factura = require ('./routes/factura.js');
const productos = require ('./routes/productos.js');
const createOrder = require('./createOrder');

const app = express();
const PORT = process.env.PORT ?? 3000;

mongoose.connect("mongodb+srv://yairbarrios25:NLD2w3dX1x83beKV@desarrollo9.7xxmsr1.mongodb.net/?retryWrites=true&w=majority&appName=Desarrollo9")
.then(() => console.log("conectado a MongoDB Atlas"))
.catch((error) => console.log(error));

app.use(express.json());
app.use(cors());

//Servir archivos estaticos de la carpeta 'img'
app.use('/img', express.static(path.join(__dirname,'img')));

app.use('/api',users);
app.use('/api',cliente);
app.use('/api',ropa);
app.use('/api',delivery);
app.use('/api',lavanderia);
app.use('/api',pedido);
app.use('/api',factura);
app.use('/api',productos);

app.get('/health-check', (req, res) => {
  res.json({ message: 'I am alive!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post('/payment/create', async (req, res) => {
  const order = await createOrder(req, res);
  res.json(order);
});
