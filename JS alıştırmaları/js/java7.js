let firstName="Lorem"
function greetins(firstName=""){
    //console.log(`Merhaba ${firstName ? firstName :""}`)
    console.log(`Merhaba ${firstName}`)
}

console.log(firstName)
greetins()
greetins("Hasan")

function greetins2(firstName,lastName){
    let info=`Merhaba ${firstName} ${lastName}`
    return info
}
let greetinsinfo=greetins2("hasan","demir")
console.log(greetinsinfo)


function domIDWriteInfo(id,info){
    let domObject=document.querySelector(`#${id}`)
    domObject.innerHTML=info;
}
let htmlInfo="<span style='color:red'>Renk Kırmızııı</span>"
domIDWriteInfo("greeting",htmlInfo)
domIDWriteInfo("info",greetins2("hasan","demir"))