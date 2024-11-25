// importação do express
const express = require('express');

// função de rotas
const rotas = express.Router();

// métodos
rotas.get("/", (req, res) => {
  res.send("Método GET de cliente.");
});

rotas.post("/", (req, res) => {
    res.send("Método POST de cliente.");
});

rotas.put("/", (req, res) => {
  res.send('Método PUT de cliente.');
});

rotas.delete("/", (req, res) => {
    res.send('Método DELETE de cliente.');
  });

// exportação
module.exports = rotas