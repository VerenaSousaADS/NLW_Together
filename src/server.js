// Importação de modulos

const express = require('express')
const path = require('path')

// Importação de arquivos
const route = require('./route')


// Puxar o express para dentro do server
const server = express()

// quem será responsável pela view engine será o ejs, detalhe essa view engine não é a mesma da pasta view
server.set('view engine', 'ejs')

// vai buscar na raíz do projeto onde está a pasta public
server.use(express.static("public"))

// quer dizer que a pasta views não está no caminho padrão , mas sim, todo o caminho até a nova pasta
// o path é o caminho que o projeto está no meu computador, o join serve para juntar esse path com o __dirname, que é nesse caso o src/, com o views, que é o nome da pasta dentro de src
server.set('views', path.join(__dirname, 'views'))

// isso é um midware entre a rota e o formulário 
server.use(express.urlencoded({extended: true}))

server.use(route)

// chamar o modulo listen
server.listen(3000, () => console.log('Rodando'))