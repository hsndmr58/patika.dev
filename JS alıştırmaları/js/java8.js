function hello(firstName){
    console.log(`Merhaba ${firstName}`)
}
hello("javaScript")
const helloFuncV1 =(firstName)=>{console.log(`Merhaba ${firstName}`)}
helloFuncV1("helleFuncV1")

const helloFuncV2 =firstName=>console.log(`Merhaba ${firstName}`)
helloFuncV2("helleFuncV2")



const helloFuncV3 =(firstName,lastName)=>console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("hasan","demir")


const helloFuncV4 =(firstName,lastName)=>{
    let info=`Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}

helloFuncV4("hasan","demir")





