const monthel = document.getElementById("month-name");
const dayel = document.getElementById("day-name");
const dateel = document.getElementById("date");
const yearel = document.getElementById("year");
const date = new Date();
// console.log(date);
const month = date.getMonth();
monthel.innerText = date.toLocaleString("en" , {month: "long"});
const day = date.getDay();
dayel.innerText = date.toLocaleString("en" , {weekday: "long"});
const dates = date.getDate();
dateel.innerText = dates;
const year = date.getFullYear();
yearel.innerText = year;








