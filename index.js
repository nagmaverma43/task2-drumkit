// Get the number of drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Add event listeners to all drum buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // Get the data-key attribute instead of the innerHTML
    var buttonKey = this.getAttribute("data-key").toLowerCase();

    makeSound(buttonKey);
    buttonAnimation(buttonKey);
  });
}

// Add an event listener for keypress events
document.addEventListener("keypress", function(event) {
  makeSound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
});

// Function to play the appropriate sound based on the key
function makeSound(key) {
  switch (key) {
    case "z":
      var tom1 = new Audio("sounds/mixkit-drum-bass-hit-2294.wav");
      tom1.play();
      break;
    case "x":
      var tom2 = new Audio("sounds/mixkit-drum-joke-accent-579.wav");
      tom2.play();
      break;
    case "c":
      var tom3 = new Audio("sounds/sounds_tom-1.mp3");
      tom3.play();
      break;
    case "v":
      var tom4 = new Audio("sounds/sounds_tom-3.mp3");
      tom4.play();
      break;
    case "b":
      var snare = new Audio("sounds/tap5.mp3");
      snare.play();
      break;
    case "n":
      var crash = new Audio("sounds/tap6.mp3");
      crash.play();
      break;
    case "m":
      var kick = new Audio("sounds/tap7.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
}

// Function to add and remove the pressed animation class
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("[data-key='" + currentKey + "']");
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
