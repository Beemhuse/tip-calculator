let bill = document.getElementById('inputText')
let display=document.getElementById("figure1")
let people= document.getElementById('people')
let displayTwo=document.getElementById('figure')
let resetBtn = document.querySelector('.reset')
let customBtn=document.getElementById('custom')

 
let displayAnswer =(result,resultTwo) =>{
    display.innerHTML=`$ ${result}`
    displayTwo.innerHTML=`$ ${resultTwo}`;
}

function calculate(number){
   
    people.addEventListener('click', () =>{
    people.innerHTML=people.value;
    console.log(people)
    })
    
    let resultTwo=bill.value/100*number;
    // console.log(displayTwo)
    let total=number/people.value
    let result=bill.value/100*total
    let subTotalFormatted=parseFloat(result).toFixed(2); //"12.13"
    result= subTotalFormatted
    resultTwo=parseFloat(resultTwo).toFixed(2);
    console.log(resultTwo)
    custom()
    
    console.log(subTotalFormatted)
    
    let displayAnswer =() =>{
    display.innerHTML=`$ ${result}`
    displayTwo.innerHTML=`$ ${resultTwo}`;
    

    resetBtn.addEventListener('click', ()=>{
        display.innerHTML='$0.00'
        displayTwo.innerHTML='$0.00'
        
    })
    
        
        
}

displayAnswer()



}

let custom=()=>{
    customBtn.textContent=customBtn.value
    let customValue=customBtn.value
    let resultTwo=bill.value/100*customValue;
    let total=customValue/people.value
    let result=bill.value/100*total
    let subTotalFormatted=parseFloat(result).toFixed(2); //"12.13"
    result= subTotalFormatted

    displayAnswer(result,resultTwo)

    console.log(customValue)
    console.log(total)
    console.log(result)
  
  }
// custom()