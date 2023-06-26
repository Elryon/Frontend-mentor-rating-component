let score=document.getElementById('score')
score.innerHTML="*"
let listNumbers=document.querySelectorAll('.number')

for (let i=0; i<listNumbers.length; i++){
    let actualNumber = listNumbers[i]

    actualNumber.addEventListener("click", (event)=>{
        myButton=event.target
        
        let number1=document.getElementById('number1')
        number1.className = "number"
        let number2=document.getElementById('number2')
        number2.className = "number"
        let number3=document.getElementById('number3')
        number3.className = "number"
        let number4=document.getElementById('number4')
        number4.className = "number"
        let number5=document.getElementById('number5')
        number5.className = "number"
        
        myButton.classList.add("numberClicked")
        myButton.classList.remove("number")
        score.innerHTML=myButton.innerHTML
    })
}


let BtnSubmit=document.querySelector('.button')

BtnSubmit.addEventListener ("click", () =>{
    if(score.innerHTML!=="*"){
        let question=document.querySelector('.question')
        let popThanks=document.querySelector('.popThanks')

        popThanks.classList.add("active")
        popThanks.classList.remove("inactive")
        question.classList.add("inactive")
        question.classList.remove("active")
    }else{
        console.log("y a pas de note")
    }
})