const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const screen = document.getElementById("screen");

start.addEventListener("click", (e) => {
  st = setInterval(() => {
    screen.innerText++, 1000;
    stop.addEventListener("click", (e) => {
      clearInterval(st);
    });
  }, 1000);
});

reset.addEventListener("click", (r) => {
  screen.innerText = 0;
});
