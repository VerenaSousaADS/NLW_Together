// importar o express

const express = require('express')

// A constante route guarda todas as funcionalidades de rotas que tem o express
const route = express.Router()

// o req é a requisição da rota e o res o response, ou resposta, que a função vai devolver

//  a barra / , é a mesma localizada depois de uma url, dominio, e indica a página de index de determinado site, nesse caso desta aplicação
// get = pegar dados
route.get('/', (req, res) => res.render("index"))

route.get('/room', (req,res) => res.render("room"))

route.get('/create-pass', (req, res) => res.render("create-pass"))

route.get('/room/:room', (req, res) => res.render("room"))


// Formato que o formulário de dentro da modal tem que passar a informação
// Passa para o express uma variavel da qual não sabemos o valor, já o primeiro room é fixo
// post =  enviar dados
// route.post('/room/:room/:question/:action', (req, res) => req.render())




// Exportar a constante route
module.exports = route