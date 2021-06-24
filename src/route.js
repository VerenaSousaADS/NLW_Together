// importar o express

const express = require('express')

// A constante route guarda todas as funcionalidades de rotas que tem o express
const route = express.Router()

// o req é a requisição da rota e o res o response, ou resposta, que a função vai devolver

//  a barra / , é a mesma localizada depois de uma url, dominio, e indica a página de index de determinado site, nesse caso desta aplicação
route.get('/', (req, res) => res.render("index"))

route.get('/room', (req,res) => res.render("room"))

route.get('/create-pass', (req, res) => res.render("create-pass"))

// Exportar a constante route
module.exports = route