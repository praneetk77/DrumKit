var buttons = document.querySelectorAll(".drum");

document.querySelector("h1").addEventListener("click", function clid() {
  alert("clid");
});

for (let i = 0; i < buttons.length; i++) {
  if (i === 0) {
    buttons[i].addEventListener("click", playTom1);
  } else if (i === 1) {
    buttons[i].addEventListener("click", playTom2);
  } else if (i === 2) {
    buttons[i].addEventListener("click", playTom3);
  } else if (i === 3) {
    buttons[i].addEventListener("click", playTom4);
  } else if (i === 4) {
    buttons[i].addEventListener("click", playCrash);
  } else if (i === 5) {
    buttons[i].addEventListener("click", playKick);
  } else if (i === 6) {
    buttons[i].addEventListener("click", playSnare);
  }
}

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "w":
      playTom1();
      break;
    case "a":
      playTom2();
      break;
    case "s":
      playTom3();
      break;
    case "d":
      playTom4();
      break;
    case "j":
      playCrash();
      break;
    case "k":
      playKick();
      break;
    case "l":
      playSnare();
      break;
  }
});

function playTom1() {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
  var button = document.querySelector(".w");
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

function playTom2() {
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play();
  var button = document.querySelector(".a");
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

function playTom3() {
  var audio = new Audio("sounds/tom-3.mp3");
  audio.play();
  var button = document.querySelector(".s");
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

function playTom4() {
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play();
  var button = document.querySelector(".d");
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

function playCrash() {
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
  var button = document.querySelector(".j");
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

function playKick() {
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
  var button = document.querySelector(".k");
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}

function playSnare() {
  var audio = new Audio("sounds/snare.mp3");
  audio.play();
  var button = document.querySelector(".l");
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}
