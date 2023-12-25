"use strict"
//Stated first task//
const time = document.querySelector(".digital_clock_time");
const minute = document.querySelector(".digital_clock_minute");
const second = document.querySelector(".digital_clock_second");


setInterval( function showTime() {

    let date = new Date();
    let times=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    if(times< 10){
    times = `0${times}`;
}
    if(minutes< 10) {
    minutes = `0${minutes}`;
}
    if(seconds< 10) {
    seconds = `0${seconds}`;
}

time.innerText = times;
minute.innerText = minutes;
second.innerText = seconds;
}, 1000)

//Stated second task//

// const gameInput = document.querySelector(".game_input");
// const gameBtn = document.querySelector(".game_btn");
// const guessInfo = document.querySelector(".guess_info");
// const guess = document.querySelector(".guess");
// const guessNumber = document.querySelector(".guess_number");

// let result = Math.round(Math.random() * 100) + 1;
// let secretNumber = 0;
// let enterNumber = [];
// gameBtn.addEventListener("click", () => {

//     let userNumber = gameInput.value;

//     if (userNumber > 100 || userNumber < 0) {
//         alert("Please enter a number between 1 and 100")
//     }
//     else {
//         secretNumber++;
//         enterNumber.push(userNumber);

//         if (userNumber > result) {
//             guessInfo.innerText = "You need to guess a lower number";
//             guess.innerText = `No.Of guesses ${secretNumber}`;
//             guessNumber.innerText = `Guessed numbers are ${enterNumber}`
//         }
//         else if (userNumber < result) {
//             guessInfo.innerText = "You need to guess a higher number";
//             guess.innerText = `No.Of guesses ${secretNumber}`;
//             guessNumber.innerText = `Guessed numbers are ${enterNumber}`;
//         }
//         else if (userNumber = result) {
//             guessInfo.innerText = "Congratulation you Win";
//             guess.innerText = `You guessed it in ${secretNumber}`;
//             guessNumber.innerText = `The number was ${userNumber}`;
//             gameBtn.disabled = true;
//         }
//     }

// });







