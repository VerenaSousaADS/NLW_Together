const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();
    const pass = req.body.password;
    let roomId;

    let isRoom = true;

    while (isRoom) {
      // Gera o número da sala
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : // Concatenção de string, para isso server o toString, para transformar esse número em uma string
            (roomId += Math.floor(Math.random() * 10).toString());
      }

      // parseInt transformou a string roomId em um número inteiro
      console.log(parseInt(roomId));

      const roomsExistIds = await db.all(`SELECT id FROM rooms`);
      //  some verifica se a consdição existe
      isRoom = roomsExistIds.some((roomsExistId) => roomsExistId === roomId);

      // Verificar se o número já existe
      //  o db.all serve para retornar um conteúdo

      if (!isRoom) {
        // Inseri a sala no BD

        await db.run(`INSERT INTO rooms (
                    id,
                    pass
                    ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}

                )`);
      }
    }
    await db.close();

    res.redirect(`/room/${roomId}`);
  },
  async open(req, res){
    const db = await Database()
    const roomId = req.params.room

    // Selecionar todas as questões da sala x, porém não entra as questões das n's salas existentes
    // Questões não lidas
    const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
    // Questões lidas
    const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)

    let isNoQuestions

    if (questions.length == 0) {
      if(questionsRead.length == 0){
        isNoQuestions = true
      }
      
    }

    res.render("room",{roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions})
  },

  enter(req, res){
    const roomId = req.body.roomId
    res.redirect(`/room/${roomId}`);

  }

};
