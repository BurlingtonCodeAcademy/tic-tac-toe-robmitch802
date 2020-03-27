//Tic-Tac-Toe 2.20.20

//name picking
//-> when starting a game, user can pick player names
//--in 1 player, user picks user name
//--in two player, users each pick name

//game timer

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

let computerPlay = false

let playerTurn = "playerX"

let playerOneName = "Tortoise"

let playerTwoName = "Turtle"

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
function winCheck(playerArray) {
    if (playerArray.includes(winCells.one[0]) && playerArray.includes(winCells.one[1]) && playerArray.includes(winCells.one[2])) {
        console.log("array one wins check successful")
        document.getElementById('statusBoard').innerHTML = "Player " + playerTurn + " WINS!!!"
        document.getElementById('whoseTurn').innerHTML = "Congratulations!!!"
    } else if (playerArray.includes(winCells.two[0]) && playerArray.includes(winCells.two[1]) && playerArray.includes(winCells.two[2])) {
        console.log("array two wins check successful")
        document.getElementById('statusBoard').innerHTML = "Player " + playerTurn + " WINS!!!"
        document.getElementById('whoseTurn').innerHTML = "Congratulations!!!"
    } else if (playerArray.includes(winCells.three[0]) && playerArray.includes(winCells.three[1]) && playerArray.includes(winCells.three[2])) {
        console.log("array three wins check successful")
        document.getElementById('statusBoard').innerHTML = "Player " + playerTurn + " WINS!!!"
        document.getElementById('whoseTurn').innerHTML = "Congratulations!!!"
    } else if (playerArray.includes(winCells.four[0]) && playerArray.includes(winCells.four[1]) && playerArray.includes(winCells.four[2])) {
        console.log("array four wins check successful")
        document.getElementById('statusBoard').innerHTML = "Player " + playerTurn + " WINS!!!"
        document.getElementById('whoseTurn').innerHTML = "Congratulations!!!"
    } else if (playerArray.includes(winCells.five[0]) && playerArray.includes(winCells.five[1]) && playerArray.includes(winCells.five[2])) {
        console.log("array five wins check successful")
        document.getElementById('statusBoard').innerHTML = "Player " + playerTurn + " WINS!!!"
        document.getElementById('whoseTurn').innerHTML = "Congratulations!!!"
    } else if (playerArray.includes(winCells.six[0]) && playerArray.includes(winCells.six[1]) && playerArray.includes(winCells.six[2])) {
        console.log("array six wins check successful")
        document.getElementById('statusBoard').innerHTML = "Player " + playerTurn + " WINS!!!"
        document.getElementById('whoseTurn').innerHTML = "Congratulations!!!"
    } else if (playerArray.includes(winCells.seven[0]) && playerArray.includes(winCells.seven[1]) && playerArray.includes(winCells.seven[2])) {
        console.log("array seven wins check successful")
        document.getElementById('statusBoard').innerHTML = "Player " + playerTurn + " WINS!!!"
        document.getElementById('whoseTurn').innerHTML = "Congratulations!!!"
    } else if (playerArray.includes(winCells.eight[0]) && playerArray.includes(winCells.eight[1]) && playerArray.includes(winCells.eight[2])) {
        console.log("array eight wins check successful")
        document.getElementById('statusBoard').innerHTML = "Player " + playerTurn + " WINS!!!"
        document.getElementById('whoseTurn').innerHTML = "Congratulations!!!"
    } else {console.log("no winners here yet")}
}


// -------- set name value -------------------//
async function nameCheck () {
    playerOneName = await ask("Player One, what's your name?")
    playerTwoName = await ask("Player Two, what's your name?")
}

//--------------------function to change cell status, place x or o---------//
function cellMove(cellID) {
    console.log(playerTurn)
    console.log(cellID)
    if (cellLookup[cellID].takenO === true || cellLookup[cellID].takenX === true) {
        document.getElementById('statusBoard').innerHTML = "That square is taken! Try a different move."
    } else if (startInit === false) {
        document.getElementById('statusBoard').innerHTML = "You haven't started the game yet. Choose one-player or two-player."
    } else if (playerTurn === "playerO") {
        cellLookup[cellID].takenO = true; //sets taken status to true
        //document.getElementById(cellLookup[cellID].ID).innerHTML = "O";
        document.getElementById(cellLookup[cellID].ID).className = "tortoise";
        document.getElementById('statusBoard').innerHTML = (playerTwoName + " took cell " + cellLookup[cellID].ID);
        playerOList.push(cellLookup[cellID].ID)
        winCheck(playerOList);
        playerTurn = "playerX" //switches player turn to other player
        console.log("inside else if " + playerTurn)
        document.getElementById('whoseTurn').innerHTML = "It's " + playerOneName + "'s turn."
        console.log("Player X moves: " + playerXList)
        console.log("Player O moves: " + playerOList)
    } else {
        cellLookup[cellID].takenX = true;
        //document.getElementById(cellLookup[cellID].ID).innerHTML = "X";
        document.getElementById(cellLookup[cellID].ID).className = "turtle";
        playerXList.push(cellLookup[cellID].ID) //adds player move to player move list
        document.getElementById('statusBoard').innerHTML = (playerOneName + " took cell " + cellLookup[cellID].ID);
        winCheck(playerXList)
        playerTurn = "playerO" //switches player turn to other player
        console.log("inside else for " + playerTurn)
        document.getElementById('whoseTurn').innerHTML = "It's " + playerTwoName + "'s turn."
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

//---------------------------one-player game start----------------------//
document.getElementById('one-player').addEventListener('click', () => {
    onePlayerInit();
});
function onePlayerInit() {
    document.getElementById('statusBoard').innerHTML = "The computer is ready. You are turtles, computer is tortoises - turtles go first.";
    startInit = true;
    computerPlay = true;
    playerTwoName = "Computer"
    playerOneName = "Human Being"
    setInterval(gameTimer, 1000)
}

//--------------------reset function --------------------
document.getElementById('reset').addEventListener('click', () => {
    reset();
})

function reset(){
    console.log('resetting game to start over... ')
    //clear taken cells

    //stop clock
    clearInterval(timeID)
}

//--------------------two-player game start ------------------------//
document.getElementById('two-player').addEventListener('click', () => {
    twoPlayerInit();
});

function twoPlayerInit() {
    document.getElementById('statusBoard').innerHTML = "Player One, it's your turn, go first.";
    startInit = true;
    setInterval(gameTimer, 1000)
}

function namePicker() {
    let playerOneName = document.getElementById('playerOneName')
    console.log(playerOneName)
}

//-------------------- game clock -----------------------------------// 
let time = 0
let timeOverflow = 0
function gameTimer() {
    document.getElementById('clock').innerHTML = ("Game Timer: " + timeOverflow + " minutes : " + time + " seconds")
    time += 1
    if (time > 59){
        timeOverflow += 1
        console.log("add " + timeOverflow + " minutes")
        time = 0
    }
}

//-------------random integer generator for computer dumb AI story --------------//
function randomInt(max, min) {
    return Math.floor(min + (Math.random() * (max - min + 1)))
}