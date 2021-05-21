let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)
const ulDOM=document.querySelector("#list")

keys =Object.keys(localStorage)
let SListe=[]
keys.forEach(value => {

    SListe.push(value.slice(5))
    
    

});
SListe.sort(function(a, b){return a - b});
function formHandler(event){
    event.preventDefault()
    const TASK=document.querySelector('#task')
    if (TASK.value === "" || TASK.value.replace(/^\s+|\s+$/g, "").length == 0){
        $(".error").toast("show");
    }
    else{
        let addItemControl=0;
        if(SListe.length==0){
            addItemControl=0
        }
        else{
            addItemControl= parseInt(SListe[SListe.length-1])+1;
        }
        newElement(TASK.value)
        $(".success").toast("show");
        localStorage.setItem(`items${addItemControl}`,JSON.stringify(loIDNOT))
        loIDNOT=[];
        location.reload(true)
        
    }

    
    TASK.value = ""
}

let loIDNOT
if(SListe.length==0){
    liID=0;
}
else{
    
    liID=parseInt(SListe[SListe.length-1])+1;
}

const newElement = not =>{
    
    let eklenecek=`
    <li onclick="listechecked(${liID})" class="d-flex justify-content-between" id="Ls${liID}"><span class="mt-3 mb-2">${not}</span><button onclick="listedensil(${liID})" id="Lb${liID}" type="submit" class="sl-btn"></button></li>
    `
    loIDNOT={id:liID,nt:not}
    
    ulDOM.innerHTML=ulDOM.innerHTML+eklenecek
    
    
}

function listedensil(liID) {
    let LsID = document.querySelector(`#Ls${liID}`)
    LsID.parentNode.removeChild(LsID)
    localStorage.removeItem(`items${liID}`)
    $(".warning").toast("show")

  
}


function listechecked(liID){
    
    let LsID = document.querySelector(`#Ls${liID}`)

    if(LsID){
        let q=LsID.className
        if(q=="d-flex justify-content-between"){
            LsID.classList.add("checked")
        }
        else{

            LsID.classList.remove("checked")
            
        }

    } 
}
function listeyidiz(){
    
    SListe.forEach(saydir => {
    let userinfo = localStorage.getItem('items'+saydir)
    userinfo=JSON.parse(userinfo)
    
    let eklenecek=`
    <li onclick="listechecked(${userinfo.id})" class="d-flex justify-content-between" id="Ls${userinfo.id}"><span class="mt-3 mb-2">${userinfo.nt}</span><button onclick="listedensil(${userinfo.id})" id="Lb${userinfo.id}" type="submit" class="sl-btn"></button></li>
    `
    ulDOM.innerHTML=ulDOM.innerHTML+eklenecek
    }); 
}