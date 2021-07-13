const pulser = document.querySelector('.pulser')
const input = document.querySelector('.friquency')
const button = document.querySelector('.changeButton')
const buttonsBlock = document.querySelector('.buttons')
const clerButton = document.querySelector('.clearButton')
const startButton = document.querySelector('.start')

let fric = Number(input.value)
let start = false


input.addEventListener('input', function(){
  buttonsBlock.style.display = 'block'
})
button.addEventListener('click', function(){
  changeFric()
})
clerButton.addEventListener('click', function(){
  buttonsBlock.style.display = 'none'
  input.value = ''
})
startButton.addEventListener('click', ()=>{
  startStop()
})

// functions -------------------------------------------
function pulsation(){
  pulser.classList.add('active');
  setTimeout(()=>{
    pulser.classList.remove('active');
  }, 200)
  setTimeout(async function(){
    if(start){
      pulsation()
    }
  }, (60/fric)*1000)
}

function changeFric(){
  fric = Number(input.value)
  buttonsBlock.style.display = 'none'
}

function startStop(){
  if(!start){
    fric = Number(input.value)
    startButton.classList.add('active')
    startButton.innerText = 'Stop'
    pulsation()
    start = true
  }else{
    startButton.classList.remove('active')
    startButton.innerText = 'Start'
    start = false
  }
}
