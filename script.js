"use strict";

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function gameStart() {
  let botNumber = Math.floor(Math.random() * 100);
  let guessTries = 10;
  console.log("🤫 загаданная цифра бота это - " + botNumber);

  function compareNumbers() {
    let userInput = prompt("Угадай число от 1 до 100");

    if (userInput === null) {
      alert("Игра окончена🫣");
      return;
    }

    if (!isNumber(userInput)) {
      alert("Введите число от 1 до 100");

      compareNumbers();
    } else {
      if (userInput > botNumber) {
        if (guessTries == 1) {
          if (confirm("Попытки закончились, хотите сыграть еще?🥺")) {
            gameStart();
          } else {
            alert("Оки, до свидания!🥹");
            return;
          }
        }

        guessTries--;
        alert("Загаданное число меньше, осталось попыток " + guessTries);

        compareNumbers();
      } else if (userInput < botNumber) {
        if (guessTries == 1) {
          if (confirm("Попытки закончились, хотите сыграть еще?")) {
            gameStart();
          } else {
            alert("Оки, до свидания!🥹");
            return;
          }
        }

        guessTries--;
        alert("Загаданное число больше, осталось попыток " + guessTries);

        compareNumbers();
      } else if (userInput == botNumber) {
        if (confirm("Поздравляю, Вы угадали!!!🥳 \nСыграем ещё?")) {
          gameStart();
        } else {
          alert("Оки, до свидания!🥹");
          return;
        }
      }
    }
  }

  compareNumbers();
}

// setTimeout(() => {
//   gameStart();
// }, 1000);

document.getElementById("start").addEventListener("click", gameStart);
