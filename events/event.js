window.onload = (event) => {
    console.log('Hello')
}

const saveButton = document.querySelector('#save')
const appendSave = document.querySelector('#saveme')
const log = document.querySelector(".event-log-contents");
saveButton.addEventListener('click', () => {
    log.textContent += "JavaScript Essentials"
    appendSave.textContent = "Save Me Please"
    console.log(appendSave)
})

window.addEventListener("load", (event) => {
    log.textContent += "load\n";
    
});
