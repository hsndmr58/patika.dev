let users=["Lorem","Ipsum","Dolor","Ipsum","Dolor","Ipsum","Dolor","Ipsum","Dolor","Ipsum","Dolor","Ipsum","Dolor","Ipsum","Dolor","Ipsum","Dolor","Ipsum","Dolor"]
const userListDOM=document.querySelector("#userList")

for(let i=0;i<users.length;i++){
    liDOM=document.createElement('li')
    liDOM.innerHTML = users[i]
    userListDOM.appendChild(liDOM)

}