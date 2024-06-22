let btns = document.querySelectorAll("header button");
let i = document.querySelector("header i");
let body = document.querySelector("body");
let isDark = false;
let fs = 20;

btns[0].addEventListener("click", () => {
  fs += 5;
  body.style.fontSize = `${fs}px`;
});

btns[1].addEventListener("click", () => {
  fs -= 5;
  body.style.fontSize = `${fs}px`;
});

i.addEventListener("click", () => {
  if (!isDark) {
    body.style.backgroundColor = "rgb(9, 39, 39)";
    body.style.color = "white";
    isDark=!isDark;
  }else{
    body.style.backgroundColor = 'white';
    body.style.color = "rgb(9, 39, 39)";
    isDark=!isDark;
  }
});
