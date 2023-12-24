"use strict"

const time = document.querySelector(".digital_clock_time");
const minute = document.querySelector(".digital_clock_minute");
const second = document.querySelector(".digital_clock_second");




function showTime() {
    let date = new Date();
    time.innerText = date.getHours();
    minute.innerText  = date.getMinutes();
    second.innerText  = date.getSeconds();
};
showTime()






