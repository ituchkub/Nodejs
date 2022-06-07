const express = require('express');
const pokemonRoute = require('./routes/pokemon') ;

const app = express();

app.use('/', pokemonRoute) ;

const port = process.env.PORT || 3000;


app.listen(port, () => console.log('Running on Port 3000') );