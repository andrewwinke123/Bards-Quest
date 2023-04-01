

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/




/*------------------------ Cached Element References ------------------------*/

const input = document.getElementById("start");



/*----------------------------- Event Listeners -----------------------------*/


input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const userInput = input.value
    console.log(userInput)
  }
})

/*-------------------------------- Functions --------------------------------*/