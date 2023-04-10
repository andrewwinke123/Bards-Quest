let audio = new Audio("../sounds/typing-short.mp3")
import {story} from "./data.js"


/*------------------------ Cached Elements ----------------------------------*/


const inputEl = document.getElementById("start-input")
const titleScreenEl = document.getElementById("title-screen")
const nameInputEl = document.getElementById("start-input")
const bodyEl = document.getElementById('body')

/*---------------------------------------------------------------------------*/

//control for input box for open of game, leading into the opening plot and the transition to the story
nameInputEl.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      inputEl.value = ''
      titleScreenEl.innerHTML = 
      `<h1 class="title anim-typewriter">${story[story.chapters].title}</h1>
      <h3>${story[story.chapters].story}</h3>
      ${playerInput()}`,
      addInputListeners()
    }
  }
)



function addInputListeners() {
  const inputButtons = document.querySelectorAll('#buttons button')
  for(let i = 0; i <inputButtons.length; i++) {
    inputButtons[i].addEventListener('click', handlePlayerInput)
  }
}







/*------------------Render the current chapter of the story------------------*/
function render() {
  let image = ''
  titleScreenEl.innerHTML = 
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