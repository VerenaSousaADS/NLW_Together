const Database = require("./config")

// Guardar as funções
const initDb = {

    //  async await serve para o código esperar a execução de linha por linha, função por função, comando por comando
    async init(){


        const db = await Database()

        await db.exec(`CREATE TABLE rooms(
            id INTERGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read  INT
        )`);
        // fechar o banco
        await db.close()
    }
}


// Executa a init
initDb.init();