let counter=0;
let counterDOM = document.querySelector("#counter")
let artDOM = document.querySelector("#art")
let azlDOM = document.querySelector("#azl")
counterDOM.innerHTML=counter
artDOM.addEventListener("click",clickEvent)
azlDOM.addEventListener("click",clickEvent)
function clickEvent () {
    if(this.id=="art"){
        counter++
        counterDOM.innerHTML=counter
    }
    if(this.id=="azl"){
        counter--
        counterDOM.innerHTML=counter
    }

    
}