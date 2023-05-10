let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
//Arreglo de patrones ganadores
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//Jugador X juega primero
let xTurn = true;
let count = 0;

//Desactivar todos los botones
const disableButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  //Activar el popup
  popupRef.classList.remove("hide");
};

//Activar los botones para jugar de nuevo o reinicio
const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //desactivar popup
  popupRef.classList.add("hide");
};

//Función que funciona para cuando el jugador gane
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> '△' Ganó";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Ganó";
  }
};

//Funcion por si empatan
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> ¡Es un empate!";
};

//New Game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

//Lógica para ganar
const winChecker = () => {
  //Recorrido de patrones para ganar
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    //Revisión por si los elementos están llenos
    //Si los 3 elementos vacios son iguales deberán
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //If all 3 buttons have same values then pass the value to winFunction
        winFunction(element1);
      }
    }
  }
};

//Mostrar la X y O al hacer el click
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //Display X
      element.innerText = "△";
      element.disabled = true;
    } else {
      xTurn = true;
      //Display Y
      element.innerText = "O";
      element.disabled = true;
    }
    //Incremento en cada click
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    //Revision si ganó en cada click
    winChecker();
  });
});
//Activar el bot para que gane
window.onload = enableButtons;
