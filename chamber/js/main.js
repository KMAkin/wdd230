let string = document.lastModified;
document.querySelector("#last-update").innerHTML=(document.lastModified);

let year = new Date().getFullYear();
document.querySelector("#year").innerHTML=year

const dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date()
let day = dayOfWeek[d.getDay()];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthsOfYear[d.getMonth()];
let date = d.getDate();
const currentFullDate = `${day}, ${date} ${month} ${year}`;
document.querySelector(".date").innerHTML=currentFullDate
