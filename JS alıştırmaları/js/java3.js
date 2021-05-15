let itemfirst=document.querySelector("ul#list>li:first-child")
console.log(itemfirst.innerHTML)
let itemlast=document.querySelector("ul#list>li:last-child")
console.log(itemlast.innerHTML)
itemlast.innerHTML=itemlast.innerHTML +" değeri değişti"
console.log(itemlast.innerHTML)
let ulDOM = document.querySelector("ul#list")
let liDOM=document.createElement("li")
let liDOM2=document.createElement("li")
liDOM.innerHTML="Kendi elemanım"
liDOM2.innerHTML="Kendi elemanım baş"
ulDOM.append(liDOM)//sonuna
ulDOM.prepend(liDOM2)//başına