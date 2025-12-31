//  The ball just goes to random positions when user clicks start and it will pause on user click
// 
// 
// I genrerally work on react and in react I would have atleast implemented till the time thing that when user gives time in the input field that ball should stay at tha position till that time then change its positions




let boardGrid = Array(49).fill(null)

let currentPosition = 'Ball'

let ballIndex = null;
let intervalId = null;

function clearBoard() {
  document.querySelectorAll(".col").forEach(col => {
    col.innerText = "";
  });
}

function moveBallRandomly() {
  clearBoard();

  ballIndex = Math.floor(Math.random() * boardGrid.length);
  boardGrid.fill(null);
  boardGrid[ballIndex] = "Ball";

  document.getElementById(ballIndex).innerText = "BALL";
}

function startGame() {
  if (intervalId) return; 

  moveBallRandomly(); 

  intervalId = setInterval(() => {
    moveBallRandomly();
  }, 1000); 
}

function pauseGame() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}



