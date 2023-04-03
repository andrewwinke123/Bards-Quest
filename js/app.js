
let state = {}





/*---------------------------- Story ----------------------------*/





let story = {chapters: 
  'chapter1', chapter1: {title: 'The Wizards Tower', 
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
      "just the thing I need to start my first spell" you think to yourself. The wizard could come home at any moment.... What do you do?`,
      choices: [ 
      {choice: 'Work on chores', result: 'wizardsTower'},
      {choice: 'Enter crafting room', result: 'craftingRoom'},
      {choice: 'Enter observation deck', result: 'observationDeck'},
      {choice: 'Collect fly', result: 'fly',
      state: {flyWings: true}}
    ]
  },
  wizardsTower: {
    title: 'You sweep around the tower and continue to daydream of life in the big city',
    story:'As you do chores.....',
    choices: [
      {choice: 'Enter crafting room', result: 'justAsYouBegin'},
      {choice: 'Enter observation deck', result: 'justAsYouBegin'},
      {choice: 'Collect fly', result: 'justAsYouBegin'},
      {choice: 'Continue Chores', result: 'justAsYouBegin'}
    ]
},
  observationDeck: {
    title: '',
    story:'',
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
  choices: [
    {choice: 'Open book', result: 'openBook'},
    {choice: 'Mix potions', result: 'mixPotionsFly',
    requiredState: (state) => state.flyWings,
    state: {flyWings: false, flyPotion: true}},
      {choice: 'Continue Chores', result: 'justInTime'}
    ]
  },
  justAsYouBegin: {
    title: 'Just as you begin..',
    story:'The Wizard Glik returns home and you slip passed him back to your chores out in the main room.',
    choices: [
      {choice: 'Enter crafting room', result: 'gliksHome'},
      {choice: 'Enter observation deck', result: 'gliksHome'},
      {choice: 'Collect fly', result: 'gliksHome'},
      {choice: 'Continue Chores', result: 'glikLeaves'}
    ]
  },
  fly: {
    title: 'you pick up the fly',
    story: 'remembering that fly wings are an important component of the flight spell, you quickly grab the fly and put it into your inventory.',
    state: {flyWings: true},
    choices: [
      {choice: 'Work on chores', result: 'wizardsTower'},
      {choice: 'Enter crafting room', result: 'craftingRoom'},
      {choice: 'Enter observation deck', result: 'observation deck'}
    ]
  },
  mixPotionsFly: {
    title: 'You pour the potions',
    story:'You successfully mix your first spell! An elixir to help you fly.',
    choices: [
      {choice: 'Exit the crafting room', result: 'inTheTower'},
      {choice: 'Search the cabinet', result: 'justAsYouBegin'},
      {choice: 'Continue Chores', result: 'justInTime'}
    ]
  },
  inTheTower: {
    title: 'You exit the Gliks crafting room',
    story:'As you re-enter the main room of the tower you think to yourself "what should I do next?" "when will the wizard return?"',
    choices: [
      {choice: 'Enter observation deck', result: 'justAsYouBegin'},
      {choice: 'Search Gliks room', result: 'gliksRoom'},
      {choice: 'Continue Chores', result: 'justAsYouBegin'}
    ]
  },
  gliksRoom: {
    title: 'You enter Gliks room',
    story:`as you enter the wizards room you are taken aback by the terrible smell. You look around to find that there isn't much in here, a bed, a globe, a couch, dirty robes in a pile.
    "this must be why he spends so much of his free time in town." you think to yourself.`,
    choices: [
      {choice: 'Check globe', result: 'justAsYouBegin'},
      {choice: 'Search pile of robes', result: 'justAsYouBegin'},
      {choice: 'Continue Chores', result: 'justAsYouBegin'}
    ]
  },
  justInTime: {
    title: 'Just in time!',
    story:'Right as Glik appears in the tower you jump back to your chores and he is none the wiser',
    choices: [
      {choice: 'Enter crafting room', result: 'gliksHome'},
      {choice: 'Enter observation deck', result: 'gliksHome'},
      {choice: 'Continue Chores', result: 'glikLeaves'}
    ]
  },
  gliksHome: {
    title: 'ZaaaAAAaaaAAAaap!',
    story:`"jUST WHAT DO YOU THINK YOU ARE DOING IN A RESTRICTED SPACE?" Glik yells`,
    choices: [
      {choice: 'Enter crafting room', result: 'gliksHome'},
      {choice: 'Enter observation deck', result: 'gliksHome'},
      {choice: 'Continue Chores', result: 'glikLeaves'}
    ]
  },
  glikLeaves: {
    title: 'After an indeterminate amount of time doing chores....',
    story:'Glik finally heads for town again. "cant wait until im in Prussia playing music on the big stage!" you think to yourself.',
    choices: [
      {choice: 'Work on chores', result: 'wizardsTower'},
      {choice: 'Enter crafting room', result: 'craftingRoom'},
      {choice: 'Enter observation deck', result: 'observation deck'},
      {choice: 'Collect fly', result: 'fly',
      state: {flyWings: true}}
    ]
}
}






/*------------------------ Cached Element References ------------------------*/


const input = document.getElementById("start-input")
const titleScreen = document.getElementById("title-screen")
const buttons = document.querySelector("#button")

/*----------------------------- Event Listeners -----------------------------*/

//timer for Gliks return
let timeLeft = 10
let timer = setInterval(function() {
    timeLeft -= 1
   if (timeLeft < 0) {
    clearInterval(timer)
    const titleScreen = document.getElementById("title-screen")
    titleScreen.innerHTML = `<h1>The Wizard Glik has returned home</h1>`
    setTimeout(function() {
    }, 0)
}
}, 10000)

//control for input box for open of game, leading into the opening plot and the transition to the story
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const userInput = input.value
    input.value = ''
    titleScreen.innerHTML = 
    `<h1>
    You are the apprentice to the evil wizard Glik, who tricked you into his employment.
    Your goal is to find a way to put this chapter of your life behind you so that you can go to the city of Prussia and make it big as a bard.
    What is your name?  <input id="start-input" type="text"></input>
    </h2>`
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
  }
})
/////////////code related to inventory/////////////////
function start() {
  state = {}
  story.chapter1[1]
}

function newOption(option) {
  return newOption.requiredState == null || option.requiredState(state)
}

function optionChoice(option) {
  state = object.assign(state, option.state)
}

start()
/////////////code related to inventory//////////////////
function addInputListeners() {
  const inputButtons = document.querySelectorAll('#buttons button')
  for(let i = 0; i <inputButtons.length; i++) {
    inputButtons[i].addEventListener('click', handlePlayerInput)
  }
 }




/*-------------------------------- Functions --------------------------------*/

function inputValue() {
  let inputs = document.querySelectorAll('input[type="button"]')
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].clicked) {
   story.chapters = (inputs[i].getAttribute('result'))
   render()
    }
  }
}

playerInput()
function playerInput() {
  let input = ''
  for(let i = 0; i <  story[story.chapters].choices.length; i++) {
    input +=
      `<div id="buttons" class="button-box">
      <button result = ${story[story.chapters].choices[i].result} id="button">${story[story.chapters].choices[i].choice}</button>
      </div>`
  }
  
  
  return input
}

function handlePlayerInput(event) {
  const result = event.target.getAttribute('result')
  if (result) {
    story.chapters = result
    render()
  }
}

// render the current chapter of the story
function render() {
  titleScreen.innerHTML = 
    `<h1>${story[story.chapters].title}</h1>
    <h3>${story[story.chapters].story}</h3>
    ${playerInput()}`
  addInputListeners() 
}
