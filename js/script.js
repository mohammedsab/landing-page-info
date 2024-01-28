"use strict";
const days = document.querySelector(".day");
const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".second");

const countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

const now = new Date().getTime();
let timer = countDownDate - now;

const newYear = function (time) {
  const day = Math.floor(time / (24 * 60 * 60 * 1000));
  const hour = Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minute = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  const second = Math.floor((time % (60 * 1000)) / 1000);

  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.textContent = second;
};

const counter = setInterval(() => {
  newYear(timer);
  timer -= 1000;

  if (timer < 0) clearInterval(counter);
}, 1000);
