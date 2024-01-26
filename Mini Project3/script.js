let a;
let data;
let time;
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString();
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("date").innerHTML = "Date:-" + date;
  document.getElementById("time").innerHTML = "Time:-" + time;
}, 1000);
