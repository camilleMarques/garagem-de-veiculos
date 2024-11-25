// importação do express
const express = require('express');

// função de rotas
const rotas = express.Router();

// métodos
rotas.get("/", (req, res) => {
    res.send("Método GET de veiculo.");
  });
  
  rotas.post("/", (req, res) => {
      res.send("Método POST de veiculo.");
  });
  
  rotas.put("/", (req, res) => {
    res.send('Método PUT de veiculo.');
  });
  
  rotas.delete("/", (req, res) => {
      res.send('Método DELETE de veiculo.');
    });

// exportação
module.exports = rotas