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

//Transition Code
window.onload = function () {
  const tl01 = gsap.timeline();
  tl01.to("#backgroundimg1", { opacity: 1 });
  tl01.to("#backgroundimg1", { opacity: 0, delay: 5 });

  const video02 = document.getElementById("video02");
  const videoDuration = video02.duration;

  const tl02 = gsap
    .timeline()
    .to("#backgroundimg2", { opacity: 1 })
    .call(function () {
      video02.pause();
      video02.currentTime = 0;
      video02.play();
    })
    .to("#backgroundimg2", { opacity: 0 }, `+=${videoDuration}`);

  const tl03 = gsap.timeline();
  tl03.to("#backgroundimg3", { opacity: 1 });
  tl03.to("#backgroundimg3", { opacity: 0, delay: 5 });

  const master = gsap.timeline({ repeat: -1 });
  master.add(tl01);
  master.add(tl02);
  master.add(tl03);
};
