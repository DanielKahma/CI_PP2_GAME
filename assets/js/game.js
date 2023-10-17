const statusDisplay = document.getElementById("gameStatus");

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () =>`Player ${currentPlayer} Wins!`;
const drawMessage = () =>`Draw!`;
const currentPlayerTurn = () =>`It's ${currentPlayer}'s turn!`;

statusDisplay.innerHTML = currentPlayerTurn();
document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", handleCellClick);
document.querySelector(".restart").addEventListener("click", handleRestartGame);

function handleCellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex =parseInt(
        clickedCell.getAttribute("data-cell-index")
    );

    if (gameState[clickedCellIndex] !=="" || !gameActive){
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();

}

function handleCellPlayed(clickedCell, clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}










