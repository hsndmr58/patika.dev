let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)

const alertDOM = document.querySelector("#alert")


const alertfunction = (title, message, className = "") => `
<div class="text-center alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong>${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`



function alertdisplay() {
    alertDOM.style.display = "none";

}
function formHandler(event) {

    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value) {
        if (SCORE.value < 0 || SCORE.value > 100) {
            alertDOM.style.display = "block"
            alertDOM.innerHTML = alertfunction("HATA! ", " Notunuz 0 ile 100 arasında olmalı!", "warning")
            setTimeout(alertdisplay, 2000)

        }
        else {
            addItem(USER_NAME.value, SCORE.value)
        }



    }
    else {
        alertDOM.style.display = "block"
        alertDOM.innerHTML = alertfunction("HATA! ", " Lütfen Alanları Doldurunuz!", "danger")
        setTimeout(alertdisplay, 2000)

    }
    USER_NAME.value = ""
    SCORE.value = ""

}
let userListDOM = document.querySelector("#userList")
let liID = 0;
const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `
    <div style="width:33%">${userName}</div>
    <span class="badge ms-2 bg-primary rounded-pill"> ${score}</span><button onclick="listedensil(${liID})" id="Lb${liID}" type="submit" class="btn btn-danger ">sil</button>
    `
    liDOM.classList.add(
        "list-group-item", "d-flex", "justify-content-between", "align-items-center"
    )
    liDOM.id = `Ls${liID}`
    userListDOM.append(liDOM)

    liID++

}

function listedensil(liID) {
    let LsID = document.querySelector(`#Ls${liID}`)
    LsID.parentNode.removeChild(LsID)
  
}