const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
const title = document.querySelector(".title");

//function to calculate string text that appears on screen
function calculate(element) {
  const value = element.innerText;

  if (value === "RESET") {
    screen.innerText = "";
  } else if (value === "=") {
    //condition to not display 'undefined' on calculator screen
    if (eval(screen.innerText) !== undefined) {
      screen.innerText = eval(screen.innerText);
    }
  } else {
    screen.innerText += value;
  }
}

//every time buttons are clicked the display the calculate function
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    calculate(button);
  });
});
