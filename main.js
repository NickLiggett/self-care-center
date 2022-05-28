var meditationIcon = document.querySelector('svg')
var receiveMessageBtn = document.querySelector('button')
var message = document.querySelector('.message')
var checkbox1 = document.querySelector('.checkbox1')
var checkbox2 = document.querySelector('.checkbox2')
var clearBtn = document.querySelector('.clear-button')
var addMessageBtn = document.querySelector('.add-message-button')
var newMessageInputBox = document.querySelector('.text-box')
var submitNewMessageBtn = document.querySelector('.submit-button')
var errorHandlingMessage = document.querySelector('.error-handling-text')


receiveMessageBtn.addEventListener('click', receiveMessage)
checkbox1.addEventListener('click', uncheckRadioButton2)
checkbox2.addEventListener('click', uncheckRadioButton1)
clearBtn.addEventListener('click', clearMessage)
addMessageBtn.addEventListener('click', showAddMessageInput)
submitNewMessageBtn.addEventListener('click', submitNewMsg)

function submitNewMsg() {
    if (checkbox1.checked === true && affirmations.includes(newMessageInputBox.value) === false){
    affirmations.push(newMessageInputBox.value)
} else if (checkbox2.checked === true && mantras.includes(newMessageInputBox.value) === false) {
  mantras.push(newMessageInputBox.value)
}
  newMessageInputBox.value = ''
  newMessageInputBox.classList.add('hidden')
  newMessageInputBox.classList.remove('visible')
  meditationIcon.classList.remove('hidden')
  meditationIcon.classList.add('visible')
  submitNewMessageBtn.classList.remove('visible')
  submitNewMessageBtn.classList.add('hidden')
  errorHandlingMessage.classList.remove('visible')
  errorHandlingMessage.classList.add('hidden')
  receiveMessageBtn.classList.add('visible')
  receiveMessageBtn.classList.remove('hidden')
}




function showAddMessageInput() {
  meditationIcon.classList.add('hidden')
  meditationIcon.classList.remove('visible')
  newMessageInputBox.classList.remove('hidden')
  newMessageInputBox.classList.add('visible')
  submitNewMessageBtn.classList.remove('hidden')
  submitNewMessageBtn.classList.add('visible')
  clearBtn.classList.remove('visible')
  clearBtn.classList.add('hidden')
  errorHandlingMessage.classList.remove('hidden')
  errorHandlingMessage.classList.add('visible')
  message.classList.remove('visible')
  message.classList.add('hidden')
  receiveMessageBtn.classList.remove('visible')
  receiveMessageBtn.classList.add('hidden')
  newMessageInputBox.focus()
}


function clearMessage() {
  meditationIcon.classList.remove('hidden')
  meditationIcon.classList.add('visible')
  clearBtn.classList.remove('visible')
  clearBtn.classList.add('hidden')
  message.classList.remove('visible')
  message.classList.add('hidden')
  addMessageBtn.classList.remove('hidden')
  addMessageBtn.classList.add('visible')
}

function receiveMessage() {
  if (checkbox1.checked === true || checkbox2.checked === true){
  chooseMessage()
  meditationIcon.classList.add('hidden')
  meditationIcon.classList.remove('visible')
  clearBtn.classList.add('visible')
  message.classList.add('visible')
  message.classList.remove('hidden')
  submitNewMessageBtn.classList.add('hidden')
  submitNewMessageBtn.classList.remove('visible')
  newMessageInputBox.classList.add('hidden')
  newMessageInputBox.classList.remove('visible')
  addMessageBtn.classList.add('hidden')
  addMessageBtn.classList.remove('visible')
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
