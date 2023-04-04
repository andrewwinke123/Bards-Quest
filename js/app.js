




/*---------------------------- Variables (state) ----------------------------*/

let story = {chapters: 
  'chapter1', chapter1: {title: 'Welcome to Gliks Tower', 
  story:`<h1>
  You are the apprentice to the evil wizard Glik, who tricked you into his employment.
  Your goal is to find a way to put this chapter of your life behind you so that you can go to the city of Prussia and make it big as a bard.
  What is your name?  <input id="start-input" type="text"></input>
  </h2>`,
  choices: [ 
  {choice: 'Work on chores', result: 'wizardsTower'},
  {choice: 'Enter crafting room', result: 'craftingRoom'},
  {choice: 'Enter observation deck', result: 'observation deck'},
  {choice: 'Collect fly', result: 'fly'}
]
},
wizardsTower: {
  title: 'Welcome to Gliks Tower', 
  story:`The Wizard Glik has just stepped out to run errands. He will be back in 5 minutes.
  </p>
  <p>
  "Don't forget your chores and you are NOT allowed in my crafting room! OR the observation deck" the wizard says.
  </p>
  <p>
  As the wizard leaves and you mosey around the his tower, you daydream about one day finding a way out of the wizards legally biding contract spell,
  which you foolishly fell for one month prior, and which legally bound you to his employment for the next 10 years. (Gamehindge is a "right to work state," and as such, workers rights are not very abundant). 
  For weeks you have been sneaking into his crafting room to learn his spells.
  You have hit a brick wall with your discrete training however, and the wizard doesn't leave for long thanks to his power of teleportaion. 
  You look around the tower and notice that a fly has fallen onto the window ledge.
  "just the thing I need to start my first spell" you think to yourself. What do you do?`,
choices: [
  {choice: 'Work on chores', result: 'wizardsTower'},
  {choice: 'Enter crafting room', result: 'craftingRoom'},
  {choice: 'Enter observation deck', result: 'observation deck'},
  {choice: 'Collect fly', result: 'fly'}
]
},
wizardsTower: {
title: 'You mop around the tower and continue to daydream of life in the big city',
story:'As you do chores.....',
choices: [
  {choice: 'Enter crafting room', result: 'justAsYouBegin'},
  {choice: 'Enter observation deck', result: 'justAsYouBegin'},
  {choice: 'Collect fly', result: 'justAsYouBegin'},
  {choice: 'Continue Chores', result: 'justAsYouBegin'}
]
},
craftingRoom: {
title: `You enter the little office where Glik studies his texts. Across from you, you see a table with multiple beakers of liquids, and a book which you recognize as his spell book.`,
story: 'Across from you, you see a table with multiple beakers of liquids, and a book which you recognize as his spell book.',
image: '1.png',
choices: [
{ choice: 'Open book', result: 'openBook'},
  {choice: 'Mix potions', result: 'Just as you begin..'},
  {choice: 'Collect fly', result: 'Just as you begin..'},
  {choice: 'Continue Chores', result: 'Just as you begin..'}
]
},
  openBook: {
title: 'Just as you begin..',
story:`The Wizard Glik enters the room and...`,
image: '2.png',
choices: [
{choice: 'Restart Game', result: 'chapter1'}
]

  },
  justAsYouBegin: {
  title: 'Just as you begin..',
  story:'The Wizard Glik enters the room and...',
  choices: [
    {choice: 'Enter crafting room', result: 'Just as you begin..'},
    {choice: 'Enter observation deck', result: 'Just as you begin..'},
    {choice: 'Collec tfly', result: 'Just as you begin..'},
    {choice: 'Continue Chores', result: 'Just as you begin..'}
   ]
  },
  justAsYouBegin: {
    title: 'Just as you begin..',
    story:'The Wizard Glik enters the room and...',
    choices: [
    {choice: 'Enter crafting room', result: 'Just as you begin..'},
    {choice: 'Enter observation deck', result: 'Just as you begin..'},
    {choice: 'Collec tfly', result: 'Just as you begin..'},
    {choice: 'Continue Chores', result: 'Just as you begin..'}
    ]
  },
  justAsYouBegin: {
    title: 'Just as you begin..',
    story:'The Wizard Glik enters the room and...',
    choices: [
    {choice: 'Enter crafting room', result: 'Just as you begin..'},
    {choice: 'Enter observation deck', result: 'Just as you begin..'},
    {choice: 'Collec tfly', result: 'Just as you begin..'},
    {choice: 'Continue Chores', result: 'Just as you begin..'}
    ]
  },
  justAsYouBegin: {
    title: 'Just as you begin..',
    story:'The Wizard Glik enters the room and...',
    choices: [
    {choice: 'Enter crafting room', result: 'Just as you begin..'},
    {choice: 'Enter observation deck', result: 'Just as you begin..'},
    {choice: 'Collec tfly', result: 'Just as you begin..'},
    {choice: 'Continue Chores', result: 'Just as you begin..'}
    ]
  },
  justAsYouBegin: {
    title: 'Just as you begin..',
    story:'The Wizard Glik enters the room and...',
    choices: [
      {choice: 'Enter crafting room', result: 'Just as you begin..'},
      {choice: 'Enter observation deck', result: 'Just as you begin..'},
      {choice: 'Collec tfly', result: 'Just as you begin..'},
      {choice: 'Continue Chores', result: 'Just as you begin..'}
     ]
  },
  justAsYouBegin: {
      title: 'Just as you begin..',
      story:'The Wizard Glik enters the room and...',
      choices: [
      {choice: 'Enter crafting room', result: 'Just as you begin..'},
      {choice: 'Enter observation deck', result: 'Just as you begin..'},
      {choice: 'Collec tfly', result: 'Just as you begin..'},
      {choice: 'Continue Chores', result: 'Just as you begin..'}
      ]
  },
  justAsYouBegin: {
      title: 'Just as you begin..',
      story:'The Wizard Glik enters the room and...',
      choices: [
      {choice: 'Enter crafting room', result: 'Just as you begin..'},
      {choice: 'Enter observation deck', result: 'Just as you begin..'},
      {choice: 'Collec tfly', result: 'Just as you begin..'},
      {choice: 'Continue Chores', result: 'Just as you begin..'}
      ]
  },
  justAsYouBegin: {
      title: 'Just as you begin..',
      story:'The Wizard Glik enters the room and...',
      choices: [
      {choice: 'Enter crafting room', result: 'Just as you begin..'},
      {choice: 'Enter observation deck', result: 'Just as you begin..'},
      {choice: 'Collec tfly', result: 'Just as you begin..'},
      {choice: 'Continue Chores', result: 'Just as you begin..'}
      ]
  },

  
}





/*------------------------ Cached Element References ------------------------*/


const input = document.getElementById("start-input")
const titleScreen = document.getElementById("title-screen")
const buttons = document.querySelector("#button")

/*----------------------------- Event Listeners -----------------------------*/

//control for input box for open of game, leading into the opening plot and the transition to the story
const nameInput = document.getElementById("start-input")
nameInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const userInput = input.value
  }
  input.value = ''
  titleScreen.innerHTML = 
  `<h1>${story[story.chapters].title}</h1>
  <h3>${story[story.chapters].story}</h3>
  ${playerInput()}`
  addInputListeners()
})

////////////
function addInputListeners() {
  const inputButtons = document.querySelectorAll('#buttons button')
  for(let i = 0; i <inputButtons.length; i++) {
    inputButtons[i].addEventListener('click', handlePlayerInput)
  }
}



bodyEl = document.getElementById('body')

/*-------------------------------- Functions --------------------------------*/
// render the current chapter of the story


function render() {
  let text = 'next'
  let image = ''
  if (story[story.chapters].image) {
    image = '<img></img>'
  }
titleScreen.innerHTML = 
`<h1>${story[story.chapters].title}</h1>
<h3>${story[story.chapters].story}</h3>
${image}
${playerInput()}`
addInputListeners() 
  // document.querySelector("img").src = `./img/${story[story.chapters].image}`
  bodyEl.style.backgroundImage = `url(./img/${story[story.chapters].image})`
}













function inputValue() {
let inputs = document.querySelectorAll('input[type="button"]')
for (let i = 0; i < inputs.length; i++) {
if (inputs[i].clicked) {
story.chapters = (inputs[i].getAttribute('data-result'))
render()
return
}
}
story.chapters = story[story.chapters].defaultResult
render()
}









playerInput()
function playerInput() {
let input = ''
if (!story[story.chapters].choices) {
  return ''
}
for(let i = 0; i <  story[story.chapters].choices.length; i++) {
input +=
  `<div id="buttons" class="button-box">
  <button data-result = ${story[story.chapters].choices[i].result} 
  id="button">${story[story.chapters].choices[i].choice}</button>
  </div>`
}

return input
}











function handlePlayerInput(event) {
const result = event.target.getAttribute('data-result')
if (result) {
story.chapters = result
render()
}
}







const restartButton = document.querySelector("#restartGame")
function restartGame(restartButton) {
  return titleScreen
}
