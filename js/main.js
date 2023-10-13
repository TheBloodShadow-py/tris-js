const domCels = document.querySelectorAll(".cel-sqaure");

let lastPick = "o";

for (let i = 0; i < domCels.length; i++) {
  domCels[i].addEventListener("click", startGame);
}

function startGame() {
  checkWinner();
  const tempCel = this;

  if (lastPick === "o") {
    if (tempCel.innerHTML === "") {
      tempCel.innerHTML = '<i class="fa-solid fa-x"></i>';
      lastPick = "x";
    } else {
      return;
    }
  } else if (lastPick === "x") {
    if (tempCel.innerHTML === "") {
      tempCel.innerHTML = '<i class="fa-regular fa-circle"></i>';
      lastPick = "o";
    } else {
      return;
    }
  }
}

function checkWinner() {}
