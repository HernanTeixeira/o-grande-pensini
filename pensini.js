console.log("welcome!");


let ledboard = [];

let minValue = 0;
let maxValue = 200;

let guess = (minValue + maxValue) / 2;

let minValueElement = undefined;
let maxValueElement = undefined;
let guessValueElement = undefined;


let interval = undefined;
let changeCallCount = 0;

let change = function () {
    let colors = ['#000000', '#1F1F1F', '#3D3D3D', '#505050', '#6B6B6B', '#858585', '#929292', '#B8B8B8']

    changeCallCount++;
    if(changeCallCount > 100) {
        clearInterval(interval);
        changeCallCount = 0;

        window.location.reload;
    }

    ledboard.forEach(function (x) {
        x.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    });
}

let writeGuessToHTML = function () {
    guessValueElement.innerHTML = Math.round(guess);
}

let onButtonLowerPressed = function () {
    maxValue = guess;
    guess = (minValue + maxValue) / 2;

    writeGuessToHTML();
}

let onButtonHigherPressed = function () {
    minValue = guess;
    guess = (minValue + maxValue) / 2;

    writeGuessToHTML();
}

let onButtonSuccessPressed = function () {
    console.log("Eureka, ive got it!");

    let victoryDiv = document.getElementById("victory");
    victoryDiv.classList.remove("d-none");
    interval = setInterval(change, 100);
}



let main = function () {

    ledboard = Array.from(document.getElementsByClassName("block"));

    minValueElement = document.getElementById("minValue");
    maxValueElement = document.getElementById("maxValue");
    guessValueElement = document.getElementById("guess");

    minValueElement.innerHTML = minValue;
    maxValueElement.innerHTML = maxValue;

    guessValueElement.innerHTML = guess;

   writeGuessToHTML();
}

main();