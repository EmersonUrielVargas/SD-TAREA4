const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
const port = 5000

let productos = [
    { name: 'Arroz', price: 9800},
    { name: 'Pasta', price: 2300},
    { name: 'Azucar', price: 2500},
    { name: 'Cafe', price: 8800},
    { name: 'Mantequilla', price: 1150},
    { name: 'panela', price: 1800},
];

app.use(express.json());

app.get('/',(req, res) => {
    res.send(productos)
})

app.post('/',(req, res) => {
    productos.push(req.body);
    res.send(productos)
})


app.listen(port, () => {
    console.log('Example app listening at http://localhost:5000')
})

