/* eslint-disable */
import "bootstrap";
import "./style.css";
import { bottom } from "@popperjs/core";

let deck = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let suitCard = ["diam", "heart", "spade", "club"];

function generateCard() {
  const deckIndex = Math.floor(Math.random() * deck.length);
  return `${deck[deckIndex]}`;
}

function generateSuit() {
  const suitIndex = Math.floor(Math.random() * suitCard.length);
  return `${suitCard[suitIndex]}`;
}

const cardContainer = document.querySelector(".card");

window.onload = function() {
  const newSuit = generateSuit();
  const topSuitElem = document.querySelector(".top-suit");
  const bottomSuitElem = document.querySelector(".bottom-suit");

  document.getElementById("heightCard").onchange = function(e) {
    let heightOfCard = e.target.value;
    cardContainer.style.height = `${heightOfCard}px`;
    if (heightOfCard < 300) {
      window.alert("It's not the correct Height. Please try again");
    }
  };
  document.getElementById("widthCard").onchange = function(event) {
    let widthOfCard = event.target.value;
    cardContainer.style.width = `${widthOfCard}px`;
    if (widthOfCard < 50) {
      window.alert("It's not the correct Width. Please try again");
    }
    if (widthOfCard > 600) {
      window.alert(
        "It's not the correct Width. Please reload the page and try again"
      );
    }
  };

  document.querySelector(".number").innerHTML = generateCard();
  // topSuitElem.innerHTML = newSuit;        //#   If you activate those 2 options the name of the class
  // bottomSuitElem.innerHTML = newSuit;    // #   will be added to the card instead of the simbol (or with it)
  topSuitElem.className = `top-suit ${newSuit}`;
  bottomSuitElem.className = `bottom-suit ${newSuit}`;

  document.querySelector("#botonGenerador").addEventListener("click", () => {
    const newSuit = generateSuit();
    const topSuitElem = document.querySelector(".top-suit");
    const bottomSuitElem = document.querySelector(".bottom-suit");

    document.querySelector(".number").innerHTML = generateCard();
    topSuitElem.className = `top-suit ${newSuit}`;
    bottomSuitElem.className = `bottom-suit ${newSuit}`;
  });

  let myTimer = setInterval(Timer, 3000);

  function Timer() {
    const newSuit = generateSuit();
    const topSuitElem = document.querySelector(".top-suit");
    const bottomSuitElem = document.querySelector(".bottom-suit");

    document.querySelector(".number").innerHTML = generateCard();
    topSuitElem.className = `top-suit ${newSuit}`;
    bottomSuitElem.className = `bottom-suit ${newSuit}`;
  }

  document.querySelector("#timerButton").addEventListener("click", evt => {
    if (myTimer) {
      clearInterval(myTimer);
      evt.target.innerText = "Start Timer";
      myTimer = null;
    } else {
      myTimer = setInterval(Timer, 3000);
      evt.target.innerText = "Stop Timer";
    }
  });
};
