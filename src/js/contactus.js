window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Thank You!");
    });
  });
});

////////////////////////////////////
//OPTIONAL SCRIPT IN CASE THE HIDDEN INPUT DIDN'T WORK

//var date = new Date();
//var current_date =
// date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
//var current_time =
// date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
//var date_time = current_date + " " + current_time;
//document.getElementById("Date").setAttribute("value", date_time);

var description = [
  "/img/4482404.jpg",
  "/img/6060317.jpg",
  "/img/daniel-leone-g30P1zcOzXo-unsplash.jpg",
];

var size = description.length;
var x = Math.floor(size * Math.random());
document.getElementById("backgroundimg").src = description[x];

//insert Fisher–Yates shuffle Algorithm here (SOON!)
