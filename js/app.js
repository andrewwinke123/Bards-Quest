
let audio = new Audio("../sounds/typing-short.mp3")
import {story} from "./data.js"


/*------------------------ Cached Element References ------------------------*/


const input = document.getElementById("start-input")
const titleScreen = document.getElementById("title-screen")
const buttons = document.querySelector("#button")
const nameInput = document.getElementById("start-input")

/*----------------------------- Event Listeners -----------------------------*/

//control for input box for open of game, leading into the opening plot and the transition to the story
nameInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const userInput = input.value
    input.value = ''
    titleScreen.innerHTML = 
    `<div class="title anim-typewriter"><h1>${story[story.chapters].title}</h1></div>
    <h3>${story[story.chapters].story}</h3>
    ${playerInput()}`
    addInputListeners()
  }
})



function addInputListeners() {
  const inputButtons = document.querySelectorAll('#buttons button')
  for(let i = 0; i <inputButtons.length; i++) {
    inputButtons[i].addEventListener('click', handlePlayerInput)
  }
}







const bodyEl = document.getElementById('body')

/*-------------------------------- Functions --------------------------------*/
// render the current chapter of the story


function render() {
  let text = 'next'
  let image = ''
  titleScreen.innerHTML = 
  `<div class="title anim-typewriter"<h1>${story[story.chapters].title}</h1></div>
  <h3>${story[story.chapters].story}</h3>
  ${image}
  ${playerInput()}`
  addInputListeners() 
  bodyEl.style.backgroundImage = `url(./img/${story[story.chapters].image})`
}







function playerInput() {
  let input = ''
  if (!story[story.chapters].choices) {
    return ''
  }
  for(let i = 0; i <  story[story.chapters].choices.length; i++) {
  input +=
    `<div class="button" id="buttons" class="button-box">
    <button data-result = ${story[story.chapters].choices[i].result} 
    id="button">${story[story.chapters].choices[i].choice}</button>
    </div>`
  }
  audio.play()
  return input

}








function handlePlayerInput(event) {
  const result = event.target.getAttribute('data-result')
  if (result) {
    story.chapters = result
    render()
    }
}