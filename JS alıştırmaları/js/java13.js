let userListDOM=document.querySelector("#userList")

fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson=>{
    responseJson.forEach(item =>{
        let liDOM =document.createElement("li")
        liDOM.innerHTML=item.title
        userListDOM.appendChild(liDOM)
    })
})