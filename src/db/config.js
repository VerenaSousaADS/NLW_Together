const sqlite3 = require("sqlite3");
const {open} = require("sqlite")

module.exports = ( ) => 
    open({

        // Qual será o arquivo do nosso banco de dados
        filename: './src/db/rocketq.sqlite',
        // driver comanda o banco de dados
        driver: sqlite3.Database 
    })
