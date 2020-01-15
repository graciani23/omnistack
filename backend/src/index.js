const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// conexão mongoDb
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-g7ol2.mongodb.net/omni?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao mongoDB!')
}).catch((err) => {
    console.log({ message: 'Houve um erro ao se conectar: ' + err})
});


app.use(express.json()); // tem que vir antes das rotas
app.use(routes);

// Tipos de parâmetros
// Query Params: req.query (filtros, ordemção, paginação)
// Route Params: req.params (identificar um recurso na alteração ou remoção)
// Body: req.body (dados para criação ou alteração de um registro)



// conexão servidor
app.listen(3333);