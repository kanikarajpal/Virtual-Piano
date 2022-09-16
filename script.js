// "use strict";

var pianokeys = document.querySelectorAll(".key");


function changeColorTimeout(currentElement, initialColor) {
  currentElement.style.backgroundColor = "#808080";
  setTimeout(() => {
    currentElement.style.backgroundColor = initialColor;
  }, 200);
}

function colorChange(number) {
  var initialColor = number < 14 ? "white" : "black";
  var currentElement = pianokeys[number];

  changeColorTimeout(currentElement, initialColor);
}

const playSound = (url) => {
  new Audio(url).play();
};

pianokeys.forEach((pianoKey, i) => {
  let number = i < 9 ? "0" + (i + 1) : i + 1;

  pianoKey.addEventListener("click", (e) => {
    let url = `../sounds/24-piano-keys_key${number}.mp3`;
    colorChange(Number(number) - 1);
    playSound(url);
  });
});
list1=['A','S','D','F','G','H','J','K','L','Z','X','C','V','B','Q','W','E','R','T','Y','U','I','O','P']

document.addEventListener("keydown", function (e) {
  let val = e.key.toUpperCase();

  if (list1.includes(val)) {
    let ind = list1.indexOf(val);
    let number = ind < 9 ? "0" + (ind + 1) : ind + 1;
    let url = `../sounds/24-piano-keys_key${number}.mp3`;
    colorChange(Number(number) - 1);
    playSound(url);
  }
});

// ıllıllı⭐🌟 D͙O͙N͙E͙ 🌟⭐ıllıllı
