//Tic-Tac-Toe 2.20.20

//start game
//->user clicks on "start"
//--start button grayed out --status area says "Player X's turn"

// document.getElementById('start').on('click', ':button', function (e) {
//     let btn = $(e.target);
//     btn.attr("disabled", "disabled"); // disable button

// });


//current player
//->user selects cell
//--board redraws --x (or O) appears in that cell
//--turn ends --current player goes to opposite (x or o)
// onclick document.getElementById()
//     ->sends cell value to winCheck; 
//     ->replaces empty cell with x or o
//     ->playerTurn ++

//user select cell
//->user picks an already-filled cell
//--game says "Pleaase select an empty cell" 
//--current player does _not_ change

//win condition
//-> player achieves 3 xoro in a row, column or diagonal
//--system draws line through three winning three cells
//--App says "congratulations!"
//--Game ends


//name picking
//-> when starting a game, user can pick player names
//--in 1 player, user picks user name
//--in two player, users each pick name

//game timer
//->game timer starts when game starts
//-timer shows time elapsed in xx seconds 
//-alt shows time elapsed in hh:mm:ss format

//new game 
//--gives option of 1 or 2 players

//artificial stupidity
//--when player vs. computer, computer always chooses a random cell

//AI real player
//--AI chooses the best cell 

//9 at once
//--play 9 games at once.
class cellObject {
    constructor(cellName, ID, takenO, takenX, type) {
        this.cellName = cellName,
            this.ID = ID,
            this.takenO = takenO,
            this.takenX = takenX,
            this.type = type
    }
}
//-----------starting variables--------------------------//
//------list of cells taken by each player---------------//
let playerXList = []

let playerOList = []

let startInit = false

let playerTurn = "playerX"

//-------------cell objects -----------------------------//
let cellZero = new cellObject("zero", "cell-0", false, false, "corner")
let cellOne = new cellObject("one", "cell-1", false, false, "side")
let cellTwo = new cellObject("two", "cell-2", false, false, "corner")
let cellThree = new cellObject("three", "cell-3", false, false, "side")
let cellFour = new cellObject("four", "cell-4", false, false, "center")
let cellFive = new cellObject("five", "cell-5", false, false, "side")
let cellSix = new cellObject("six", "cell-6", false, false, "corner")
let cellSeven = new cellObject("seven", "cell-7", false, false, "side")
let cellEight = new cellObject("eight", "cell-8", false, false, "corner")

const cellLookup = {
    'cellZero': cellZero,
    'cellOne': cellOne,
    'cellTwo': cellTwo,
    'cellThree': cellThree,
    'cellFour': cellFour,
    'cellFive': cellFive,
    'cellSix': cellSix,
    'cellSeven': cellSeven,
    'cellEight': cellEight
}

//-----winning cell combos ----------------------------//
const winCells = {
    one: ["cell-0", "cell-1", "cell-2"],
    two: ["cell-3", "cell-4", "cell-5"],
    three: ["cell-6", "cell-7", "cell-8"],
    four: ["cell-0", "cell-3", "cell-6"],
    five: ["cell-1", "cell-4", "cell-7"],
    six: ["cell-2", "cell-5", "cell-8"],
    seven: ["cell-0", "cell-4", "cell-8"],
    eight: ["cell-6", "cell-4", "cell-2"]
}
//-------win checking function ----------------------//
function winCheck(playerArray){
    for (let cell of winCells) {
    if (playerArray.includes(wincells.one[0]) && playerArray.includes(winCells.one[1] && playerArray.includes(winCells.one[2])){

    }
    }
}

function gameInit(){
    startInit=true;
}

//--------------------function to change cell status, place x or o---------//
function cellMove(cellID) {
    console.log(playerTurn)
    console.log(cellID)
    if (cellLookup[cellID].takenO === true || cellLookup[cellID].takenX === true) {
        document.getElementById('statusBoard').innerHTML = "That square is taken! Try a different move."
    } else if (playerTurn === "playerO") {
        cellLookup[cellID].takenO = true; //sets taken status to true
        document.getElementById(cellLookup[cellID].ID).innerHTML = "O";
        document.getElementById('statusBoard').innerHTML = ("Player O took cell " + cellLookup[cellID].ID);
        playerOList.push(cellLookup[cellID].ID)
        playerTurn = "playerX" //switches player turn to other player
        console.log("inside else if " + playerTurn)
        document.getElementById('whoseTurn').innerHTML = "It's " + playerTurn + "'s turn."
        console.log("Player X moves: " + playerXList)
        console.log("Player O moves: " + playerOList)
    } else {
        cellLookup[cellID].takenX = true;
        document.getElementById(cellLookup[cellID].ID).innerHTML = "X";
        playerXList.push(cellLookup[cellID].ID) //adds player move to player move list
        document.getElementById('statusBoard').innerHTML = ("Player X took cell " + cellLookup[cellID].ID);
        playerTurn = "playerO" //switches player turn to other player
        console.log("inside else for " + playerTurn)
        document.getElementById('whoseTurn').innerHTML = "It's " + playerTurn + "'s turn."
        console.log("Player X moves: " + playerXList)
        console.log("Player O moves: " + playerOList)
    }
}

//----------------------event listeners for cell move function ------------//
document.getElementById('cell-0').addEventListener('click', () => {
    cellMove('cellZero');
}, 2000)
document.getElementById('cell-1').addEventListener('click', () => {
    cellMove('cellOne');
}, 2000)
document.getElementById('cell-2').addEventListener('click', () => {
    cellMove('cellTwo');
}, 2000)
document.getElementById('cell-3').addEventListener('click', () => {
    cellMove('cellThree');
}, 2000)
document.getElementById('cell-4').addEventListener('click', () => {
    cellMove('cellFour');
}, 2000)
document.getElementById('cell-5').addEventListener('click', () => {
    cellMove('cellFive');
}, 2000)
document.getElementById('cell-6').addEventListener('click', () => {
    cellMove('cellSix');
}, 2000)
document.getElementById('cell-7').addEventListener('click', () => {
    cellMove('cellSeven');
}, 2000)
document.getElementById('cell-8').addEventListener('click', () => {
    cellMove('cellEight');
}, 2000)


//------------------------start button event listener --------------------//

//one-player button 
document.getElementById('one-player').addEventListener('click', () => {
    onePlayerInit();
});
function onePlayerInit() {
    document.getElementById('statusBoard').innerHTML = "The computer is ready. You are X, computer is O - X goes first.";
    gameInit()
    setInterval(gameTimer, 1000)
}

//two-player button
document.getElementById('statusBoard').addEventListener('click', () => {
    twoPlayerInit();
});

function twoPlayerInit() {
    document.getElementById('playerStatus').innerHTML = "Player One, it's your turn, go first.";
    gameInit();
    setInterval(gameTimer, 1000);
}
//game clock
let time = 0
function gameTimer(){
    document.getElementById('clock').innerHTML = (time + " seconds")
    time += 1
}

function stopClock() {
    clearInterval(intervalID);
}

function randomInt(max, min) {
    return Math.floor(min + (Math.random() * (max - min + 1)))
  }