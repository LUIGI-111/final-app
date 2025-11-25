const express = require('express');
const cors = require('cors');
const app = express();

const userLR = require('./routes/user'); 
const perfumesR = require('./routes/perfumes');
const carritoR = require('./routes/carrito');
const favoritosR = require('./routes/favoritos');

app.use(cors());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use('/api', userLR); 
app.use('/api', perfumesR);
app.use('/api', carritoR);
app.use('/api', favoritosR);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:3000`);
});