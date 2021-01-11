"use strict";

const ramadanDate = new Date("April 18, 2021");

let interval = setInterval(function () {
  const today = new Date().getTime();
  const remaning = ramadanDate - today;

  let days = Math.floor(remaning / (1000 * 60 * 60 * 24));
  let hours = Math.floor((remaning % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((remaning % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remaning % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days
  document.getElementById('hours').innerHTML = hours
  document.getElementById('minutes').innerHTML = minutes
  document.getElementById('seconds').innerHTML = seconds

  if (remaning < 0) {
    clearInterval(interval);
  }
}, 1000);

