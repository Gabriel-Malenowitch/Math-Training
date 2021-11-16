function random(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

let a = 0
let b = 100
let x = random(a, b)
let y = random(a, b)

const cookies = document.cookie
export const win = "rgb(0, 100, 0)" 
const normal = "whitesmoke"

const Util = {
    multiply: (answer=false)=>{
        if(answer){
            if(document.getElementById('answer').value === String(x*y)){
                document.body.style.backgroundColor = win          
            }
        }else{
            document.getElementById('answered').innerText = String(x*y)
            document.getElementById('text').innerText=
            `${x}
            X
            ${y}
            `
        }
    },

    division: (answer=false)=>{
        if(answer){
            if(document.getElementById('answer').value == String(Number(x/y).toFixed(1))){
                document.body.style.backgroundColor = win      
            }
        }else{
            document.getElementById('answered').innerText = String(Number(x/y).toFixed(1))
            document.getElementById('text').innerText=
            `${x}
            /
            ${y}
            `
        }
    },

    adiction: (answer=false)=>{
        if(answer){
            if(document.getElementById('answer').value === String(x+y)){
                document.body.style.backgroundColor = win           
            }
        }else{
            document.getElementById('answered').innerText = String(x+y)
            document.getElementById('text').innerText=
            `${x}
            +
            ${y}
            `
        }
    },

    subtration: (answer=false)=>{
        if(answer){
            if(document.getElementById('answer').value === String(x-y)){
                document.body.style.backgroundColor = win
            }
        }else{
            document.getElementById('answered').innerText = String(x-y)
            document.getElementById('text').innerText=
            `${x}
            -
            ${y}
            `
        }
    },

    reload: (a, b, answered)=>{
        x = random(a, b)
        y = random(a, b)
        document.getElementById('answer').value = ''
        document.getElementById('answered').style.visibility = answered
        document.body.style.backgroundColor = normal 
        switch (cookies) {
            case "multiply":
                Util.multiply()            
                break;
            case "division":
                Util.division()            
                break;
            case "adiction":
                Util.adiction()            
                break;
            case "subtration":
                Util.subtration()            
                break;
        }
    },
}

export default Util;