const express = require('express');
const  cors = require('cors');
const bcrypt = require('bcrypt');
const userSchema = require('../models/usuariosSh.js');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, username, password, correo, tipo } = req.body;
  try {
    let user = await userSchema.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: 'Usuario ya existe' });
    }
    user = userSchema({ name, username, password, correo, tipo });
    await user.save();
    res.json({ msg: 'Usuario registrado' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
});

router.get('/users', (req, res) => {
  userSchema
  .find()
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

router.get('/user', (req, res) => {
  const id = req.query.id;
  userSchema
  .findById({_id:id})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

router.post('/userUpd', (req, res) => {
  var { id, name, username, password, correo, tipo } = req.body;
  password2 = bcrypt.hashSync(password, 10);
  userSchema
  .updateOne({ _id:id }, {$set: {name, username, password, correo, tipo}})
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

router.post('/userDlt', (req, res) => {
  const { id } = req.body;
  userSchema
  .findByIdAndDelete({ _id:id })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

router.post('/login', async (req, res) => {
  
  const { username, password } = req.body;
  console.log("hola");
  try {
    let user = await userSchema.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Datos incorrectos' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Datos incorrectos' });
    }
   
    res.json({ msg: 'Login exitoso', user: user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error en el servidor');
  }
});

module.exports = router;
