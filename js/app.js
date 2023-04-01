

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/





/*------------------------ Cached Element References ------------------------*/


const input = document.getElementById("start-input")
const titleScreen = document.getElementById("title-screen")

console.log(titleScreen)
/*----------------------------- Event Listeners -----------------------------*/


input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const userInput = input.value
    console.log(userInput)
    input.value = ''
    titleScreen.innerHTML = 
    `<h1>
    You are the apprentice to the evil wizard Glik, who tricked you into his employment.
    Your goal is to find a way to put this chapter of your life behind you so that you can go to the city of Prussia and make it big as a bard.
    What is your name?  <input id="name-input" type="text"></input>
    </h2>`
    const nameInput = document.getElementById("name-input")
    nameInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        const userInput = input.value
        console.log(userInput)
        input.value = ''
        titleScreen.innerHTML = 
        `<h1>
          welcome to the Land of Lizards ${nameInput.value}!
          </h2>`
      }
    })
  }
})





/*-------------------------------- Functions --------------------------------*/

function parseInput(input) {
  const words = input2.toLowerCase().split(' ')
  const verb = words[0]
  const noun = words.slice(1).join(' ')
  
return {verb, noun}
}

const input2 = "grab key"
const parsedInput = parseInput(input)
console.log(parsedInput)



