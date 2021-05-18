let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit',formHandler)

const alertDOM=document.querySelector("#alert")

const  alertfunction=(title,message,className="") => `
<div class="text-center alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong>${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
const Listclear=document.querySelector("#ListeTemizle")

function kontrol(){
        console.log("çalıştı")
        if(userListDOM.innerHTML.length>0){
            Listclear.style.display="block";
        }
        else{
            Listclear.style.display="none";
        }
    
   
}
function listeTemizle(){
userListDOM.innerHTML=""
kontrol()
}

function alertdisplay(){
    alertDOM.style.display="none";
}
function formHandler(event){
    
    event.preventDefault()
    const USER_NAME=document.querySelector("#username")
    const SCORE=document.querySelector("#score")
    if(USER_NAME.value && SCORE.value){
        if(SCORE.value<0 || SCORE.value>100){
            alertDOM.style.display="block"
            alertDOM.innerHTML=alertfunction("HATA! "," Notunuz 0 ile 100 arasında olmalı!","warning")
            setTimeout(alertdisplay,2000)
            
        }
        else{
            addItem(USER_NAME.value, SCORE.value)
        }
        

        
    }
    else{
        alertDOM.style.display="block"
    alertDOM.innerHTML=alertfunction("HATA! "," Lütfen Alanları Doldurunuz!","danger")
    setTimeout(alertdisplay,2000)
    
    }
    USER_NAME.value=""
    SCORE.value=""
    
}
let userListDOM=document.querySelector("#userList")

const addItem= (userName,score) => {
    let liDOM=document.createElement('li')
    liDOM.innerHTML=`
    ${userName}
    <span class="badge bg-primary rounded-pill"> ${score}</span>
    `
    liDOM.classList.add(
        "list-group-item","d-flex","justify-content-between","align-items-center"
    )
    userListDOM.append(liDOM)
    kontrol()

}
