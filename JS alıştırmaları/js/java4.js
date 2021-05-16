let div = document.querySelector('#kelle')
let bilgi=document.querySelector("#sinif")
var sonuc=bilgi.classList.contains("classList")
function baba(){
  if(sonuc==true){
      alert("true")
  }
  else{
      alert("false")
  }
}
function turuncu() 
{
  div.classList.add('turuncu');
}

function temizle() 
{
  div.classList.remove('turuncu');
}

function replace() 
{
  let durum=div.classList.contains("replace")
  if(durum==true){
    div.classList.remove('replace');
  }
  else{
    div.classList.add('replace');
  }
 

}
function item() 
{
  alert(bilgi.classList.item(0))
}
