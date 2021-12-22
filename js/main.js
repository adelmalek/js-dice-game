// VARIABLES

let scores, currentScore, activePlayer, gameIsNotOver;

const dice = document.querySelector(".dice");
const btn_roll = document.querySelector(".btn-roll");
const btn_keep = document.querySelector(".btn-keep");
const btn_new = document.querySelector(".btn-new");


// INIT FUNCTION

function init() {

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gameIsNotOver = true;

    dice.classList.add("visibility");

    document.querySelector("#name-0").innerHTML = "Batman";
    document.querySelector("#name-1").innerHTML = "Joker";
    document.querySelector("#score-0").innerHTML = "0";
    document.querySelector("#score-1").innerHTML = "0";
    document.querySelector("#current-0").innerHTML = "0";
    document.querySelector("#current-1").innerHTML = "0";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");

    btn_roll.classList.remove("visibility");
    btn_keep.classList.remove("visibility");

};

init();

// ROLL BUTTON

btn_roll.addEventListener("click", function() {

    if (gameIsNotOver) {
        dice.classList.remove("visibility");

        let die_value = Math.floor(Math.random() * 6) + 1;
        dice.src = "img/dice-" + die_value + ".png";

        if (die_value != 1) {
            currentScore += die_value;
            document.querySelector("#current-" + activePlayer).innerHTML = currentScore;
        } else {
            nextPlayer();
        };
    };
    
});


// KEEP BUTTON

btn_keep.addEventListener("click", function() {

    if (gameIsNotOver) {

        scores[activePlayer] += currentScore;
        document.querySelector("#score-" + activePlayer).innerHTML = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            document.querySelector("#name-" + activePlayer).innerHTML = "THE WINNER";
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            gameIsNotOver = false;
            setTimeout(disappearingButtons, 2000);
        } else {
            nextPlayer();
        };

    };

});


// NEXT PLAYER

function nextPlayer() {

    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    currentScore = 0;
    document.querySelector("#current-0").innerHTML = "0";
    document.querySelector("#current-1").innerHTML = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

};


// DISAPPERARING ROLL AND KEEP BUTTON

function disappearingButtons() {
    btn_roll.classList.add("visibility");
    btn_keep.classList.add("visibility");
};


// NEW GAME

btn_new.addEventListener("click", init);