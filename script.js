const randomNumber = Math.round(Math.random() * 10)

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let tentativas = 1

console.log(randomNumber)

function handleTryClick(event){
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber").value
    
    if(Number(inputNumber) == randomNumber){
        toggleScreen()
        
        if(tentativas > 1){
            screen2.querySelector("h2").innerText = `Parabéns você acertou em ${tentativas} tentativas`
        } else {
            screen2.querySelector("h2").innerText = `Parabéns você acertou na primeira tentativa`
        }    
    }
    tentativas++
}

function resetClick(){
    toggleScreen()
    tentativas = 1
    document.querySelector("#inputNumber").value = ''
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', resetClick)
