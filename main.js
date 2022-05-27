var meditationIcon = document.querySelector('svg')
var receiveMessageBtn = document.querySelector('button')
var message = document.querySelector('.message')
var checkbox1 = document.querySelector('.checkbox1')
var checkbox2 = document.querySelector('.checkbox2')
var clearBtn = document.querySelector('.clear-button')
var addMessageBtn = document.querySelector('.add-message-button')
var addMessageInput = document.querySelector('.text-box-area')

receiveMessageBtn.addEventListener('click', receiveMessage)
checkbox1.addEventListener('click', uncheckRadioButton2)
checkbox2.addEventListener('click', uncheckRadioButton1)
clearBtn.addEventListener('click', clearMessage)
addMessageBtn.addEventListener('click', showAddMessageInput)

function showAddMessageInput() {
  meditationIcon.classList.add("hidden")
  addMessageInput.classList.remove('hidden')
  addMessageInput.classList.add('visible')
}


function clearMessage() {
  meditationIcon.classList.remove("hidden")
  meditationIcon.classList.add("visible")
  clearBtn.classList.remove("visible")
  message.classList.remove("visible")
  message.classList.add("hidden")
}

function receiveMessage() {
  if (checkbox1.checked === true || checkbox2.checked === true){
  chooseMessage()
  meditationIcon.classList.add("hidden")
  meditationIcon.classList.remove("visible")
  clearBtn.classList.add("visible")
  message.classList.add("visible")
  message.classList.remove("hidden")
}
}

function chooseMessage() {
  if (checkbox1.checked) {
  message.innerText = affirmations[getRandomIndex(affirmations)]
} else if (checkbox2.checked){
  message.innerText = mantras[getRandomIndex(mantras)]
}
}

function uncheckRadioButton2() {
  if (checkbox1.checked === true){
    checkbox2.checked = false
  }
}

function uncheckRadioButton1() {
  if (checkbox2.checked === true){
    checkbox1.checked = false
  }
}




function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}




// vvv Message List vvv



var mantras = ['Breathing in, I send myself love.',
'Breathing out, I send love to someone else who needs it.',
'Do not let yesterday take up too much of today.',
'Every day is a second chance.', 'Tell the truth and love everyone.',
'I am free from sadness.',
'I am enough.',
'In the beginning it is you, in the middle it is you and in the end it is you.',
'I love myself.',
'I am present now.',
'Inhale the future, exhale the past.',
'This too shall pass.',
'Yesterday is not today.',
'The only constant is change.',
'Onward and upward.',
'I am the sky, the rest is weather.']

var affirmations = ['I forgive myself and set myself free.', 'I believe I can be all that I want to be.',
 'I am in the process of becoming the best version of myself.',
'I have the freedom & power to create the life I desire.',
'I choose to be kind to myself and love myself unconditionally.',
'My possibilities are endless.',
'I am worthy of my dreams.',
'I am enough.',
'I deserve to be healthy and feel good.',
'I am full of energy and vitality and my mind is calm and peaceful.',
'Every day I am getting healthier and stronger.',
'I honor my body by trusting the signals that it sends me.',
'I manifest perfect health by making smart choices.']
