const statusDisplay = document.getElementById("gameStatus");

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () =>`Player ${currentPlayer} Wins!`;
const drawMessage = () =>`Draw!`;
const currentPlayerTurn = () =>`It's ${currentPlayer}'s turn!`;
