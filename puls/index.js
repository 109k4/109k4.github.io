const pulser = document.querySelector('.pulser')
const input = document.querySelector('.friquency')
const button = document.querySelector('.changeButton')
const startButton = document.querySelector('.start')

let fric = Number(input.value)
let start = false

button.addEventListener('click', function(){
  changeFric()
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