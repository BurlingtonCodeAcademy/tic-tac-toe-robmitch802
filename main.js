//Tic-Tac-Toe 2.20.20

//start game
//->user clicks on "start"
//--start button grayed out --status area says "Player X's turn"
document.getElementById('start').on('click', ':button', function (e) {
    let btn = $(e.target);
    btn.attr("disabled", "disabled"); // disable button

});

//current player
//->user selects cell
//--board redraws --x (or O) appears in that cell
//--turn ends --current player goes to opposite (x or o)
onclick document.getElementById()
    ->sends cell value to winCheck; 
    ->replaces empty cell with x or o
    ->playerTurn ++

//user select cell
//->user picks an already-filled cell
//--game says "Pleaase select an empty cell" 
//--current player does _not_ change
onclick
    ->check on whether cell-0 or whatever ==="x" || "o"
    print("Please select an empty cell.")

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