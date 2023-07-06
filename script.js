// pega-se os elementos do html e guarda-se em variaveis e constantes
const notesContainer = document.querySelector(".notes_container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input_box");


// pega o que tem no local storage e mostra na tela
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// da o update no local storage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// criar-se o bloco de nota
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input_box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

// permite a remocao de cada note e da o update no local storage
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input_box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

// Previne a quebra do codigo
document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

