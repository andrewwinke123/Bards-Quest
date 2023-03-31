const input = document.getElementById("start");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const userInput = input.value;
    console.log(userInput);
  }
});