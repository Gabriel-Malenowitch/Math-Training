import Util, {win} from "./Utils.js"

//Random base
let a = 0
let b = 100

let answered = 'hidden'
function setAnswered(value){
    answered = value
}

const cookies = document.cookie
console.log(cookies)

Util.reload(a, b, answered)

//Get "a" and "b"
document.getElementById('min').addEventListener('input',()=>{
    a = document.getElementById('min').value
    Util.reload(a, b, answered)
})
document.getElementById('max').addEventListener('input',()=>{
    b = document.getElementById('max').value
    Util.reload(a, b, answered)
})

//Operation Type
document.getElementById('answer').addEventListener('input',()=>{
    switch (cookies) {
        case "multiply":
            Util.multiply(true)            
            break;
        case "division":
            Util.division(true)            
            break;
        case "adiction":
            Util.adiction(true)            
            break;
        case "subtration":
            Util.subtration(true)            
            break;
        }
    })
    
//Press Enter --->
document.addEventListener('keypress',e=>{
    //console.log(e.key)
    if(e.key === "Enter"){
        if(document.body.style.backgroundColor === win){
            Util.reload(a, b, answered)
        }
    }
    if(e.key === "/"){
        setAnswered(answered === 'hidden' ? 'visible': 'hidden')
        document.getElementById('answered').style.visibility = answered
    }
})


//Para criar uma nova operação:

//Criar a função
//Adicionar ao reload
//Adicionar ao add event listener