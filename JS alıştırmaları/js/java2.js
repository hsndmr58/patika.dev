let userName=prompt("Lütfen adınızı giriniz")
let element=document.querySelector("#test")
element.innerHTML=`${element.innerHTML} <small style="color:green;">${userName}</small>`