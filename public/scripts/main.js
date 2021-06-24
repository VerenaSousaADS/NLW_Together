// Importar funções

import  Modal  from './modal.js'

// Adicionar a Modal em uma constante
const modal = Modal()

// Pegar todos os botões que existe com a classe check

const checkButtons = document.querySelectorAll(".actions a.check")

// Para cada botão da classe check, dentro da variavel button 
checkButtons.forEach(button => {
   
    // adicionar a escuta 
    // o que será escutado, será o evento click
    button.addEventListener("click", event => {

        // Abrir a modal
        modal.open()
    })

})

// Quando o botão delete for clicado ele abre a modal

const deleteButton = document.querySelectorAll(".actions .delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event =>{
        modal.open()
    })
})

