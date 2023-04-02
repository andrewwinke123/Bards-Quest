

/*-------------------------------- Library --------------------------------*/




/*---------------------------- Variables (state) ----------------------------*/

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
      "just the thing I need to start my first spell" you think to yourself. What do you do?`,
      choices: [ 
      {choice: 'Work on chores', result: 'wizards tower'},
      {choice: 'Enter crafting room', result: 'crafting room'},
      {choice: 'Enter observation deck', result: 'observation deck'},
      {choice: 'Collect fly', result: 'fly'}
    ]
  }
}









/*------------------------ Cached Element References ------------------------*/


const input = document.getElementById("start-input")
const titleScreen = document.getElementById("title-screen")


/*----------------------------- Event Listeners -----------------------------*/

//control for input box for open of game, leading into the opening plot and the transition to the story
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
        `<h1>${story[story.chapters].title}</h1>
        <h3>${story[story.chapters].story}</h3>
        ${playerInput()}`
      }
    })
  }
})





/*-------------------------------- Functions --------------------------------*/



playerInput()
function playerInput() {
  let input = ''
  for(let i = 0; i <  story.chapter1.choices.length; i++) {
    input +=
      `<div id="buttons" class="button-box">
      <button id="button">${story[story.chapters].choices[i].choice}</button>
      </div>`
  }
  
  return input
}



// let story = {chapter1: {title: 'chapter 1', story: `You head to the head down to the crafting room where Glik works on his spells. You have snuck in here a few times before so you know his spell book is
//     on the table where he keeps his beakers and potions. You also see his bed to the left. And a cabinet to the left of that.`,
//     choices: [ {choice: 'look', result: 'crafting room'},
//       {choice: 'read book', result: 'book'},
//       {choice: 'open cabinet', result: 'cabinet'},
//       {choice: 'mix potions' && 'mix beakers', result: 'mix potions'}
//     ]
//   }
// }


