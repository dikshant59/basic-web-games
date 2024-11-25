let userSeq = [];
let gameSeq = [];
let btns = ["yellow", "red", "blue", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

function checkAns(idx) {
  // let idx = level-1;

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score is <b>${level}</b> Press any key to start again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
  }
  levelup();
});
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 200);
}

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let renIdx = Math.floor(Math.random() * 4);
  let ranClr = btns[renIdx];
  let ranBtn = document.querySelector(`.${ranClr}`);
  gameSeq.push(ranClr);
  console.log(gameSeq);
  gameFlash(ranBtn);
}
function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  // console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
