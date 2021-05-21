let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)
const ulDOM=document.querySelector("#list")
var values = [],keys = Object.keys(localStorage),loi = keys.length;
function formHandler(event){
    event.preventDefault()
    const TASK=document.querySelector('#task')
    if (TASK.value === "" || TASK.value.replace(/^\s+|\s+$/g, "").length == 0){
        $(".error").toast("show");
    }
    else{
        newElement(TASK.value)
        $(".success").toast("show");
        localStorage.setItem(`items${loi}`,JSON.stringify(loIDNOT))
        loIDNOT=[];
        loi++;
    }

    
    TASK.value = ""
}

let loIDNOT
let liID = loi;
const newElement = not =>{
    
    let eklenecek=`
    <li onclick="listechecked(${liID})" class="d-flex justify-content-between" id="Ls${liID}"><span class="mt-3 mb-2">${not}</span><button onclick="listedensil(${liID})" id="Lb${liID}" type="submit" class="sl-btn"></button></li>
    `
    loIDNOT={id:liID,nt:not}
    liID++
    ulDOM.innerHTML=ulDOM.innerHTML+eklenecek
    
}

function listedensil(liID) {
    let LsID = document.querySelector(`#Ls${liID}`)
    LsID.parentNode.removeChild(LsID)
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
let don=loi
function listeyidiz(){
    
    while ( don-- ) {
        let userinfo = localStorage.getItem('items'+don)
        userinfo=JSON.parse(userinfo)
        
        
    let eklenecek=`
    <li onclick="listechecked(${userinfo.id})" class="d-flex justify-content-between" id="Ls${userinfo.id}"><span class="mt-3 mb-2">${userinfo.nt}</span><button onclick="listedensil(${userinfo.id})" id="Lb${userinfo.id}" type="submit" class="sl-btn"></button></li>
    `
    ulDOM.innerHTML=ulDOM.innerHTML+eklenecek


        values.push( localStorage.getItem(keys[don]) );
    }

    console.log(values)
}