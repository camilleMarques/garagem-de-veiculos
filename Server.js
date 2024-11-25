// importação do express
const express = require('express')

// criação do app Express
const app = express();

// importação de rotas
const clienteRotas = require('./routes/cliente');
const veiculoRotas = require('./routes/veiculo');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 8080;

app.get('/', (req, res) => {
  res.send('Bem vindo a raiz do servidor.')
})

// utilização das rotas
app.use('/cliente', clienteRotas);
app.use('/veiculo', veiculoRotas);


// rodar a aplicação
app.listen(port, hostname, console.log('Servidor rodando...'));