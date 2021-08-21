import resetDocuments from './resetDocument.js'
import { columnOne, columnTwo, columnThree, rowOne, rowTwo, rowThree, draw, diagonalOne, diagonalTwo } from './resultFunctions.js';
import playerWins from './playerWins.js'
import playerClick from './playerCondition.js'
import nextButtonPlayerCondition from './nextButtonPlayerCondition.js';

let player = 1;
let win = -1;
let clickCounter = 0;
let board = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
]
/*      Board Map
    [0,0][1,0][2,0] 
    [0,1][1,1][2,1]
    [0,2][1,2][2,2]
*/

/* ***** This is for the Game History ***** */
let game = [
    ['','',''],
    ['','',''],
    ['','','']
]
let gameState = []
let gameHistory = [];

let boardPlot = [];
let boardPlotHistory = [];

let cols = document.querySelectorAll('.col')
Array.from(cols).map((col) => {
   col.addEventListener('click', function(){
        clickedCell(col, col.getAttribute('cell-index-row'), col.getAttribute('cell-index-col'), col.getAttribute('elementNum')) // Clicked every cell
   })
})

const clickedCell = (element, row, col, elNum) => {

    /* ***** GAME STATE HISTORY ***** */
    if(player == 1){
        game[col][row] = localStorage.getItem('p1-checker')
    } else {
        game[col][row] = localStorage.getItem('p2-checker')
    }
    console.table(game)
    /* ***** MOVE PER CELL ***** */
    if (win != -1) { 
        return;
    }
    else {
        if(element.innerHTML != "") {
            return;
        } else {
            clickCounter++;
            board[row][col] = player;
            gameState.push(JSON.parse(JSON.stringify(game)))
            boardPlot.push(elNum)
            if(elNum == 0) {
                playerClick(player, element);
            } else if (elNum == 1) {
                playerClick(player, element);
            }  else if (elNum == 2) {
                playerClick(player, element);
            } else if (elNum == 3) {
                playerClick(player, element);
            }  else if (elNum == 4) {
                playerClick(player, element);
            }  else if (elNum == 5) {
                playerClick(player, element);
            }  else if (elNum == 6) {
                playerClick(player, element);
            }  else if (elNum == 7) {
                playerClick(player, element);
            }  else if (elNum == 8) {
                playerClick(player, element);
            } 
            if(player == 1){
                player = 2;
            } else if(player == 2){
                player = 1;
            }
        }
    }

        /* ********** COLUMN CHECK ********** */
        if((board[0][0] === board[0][1]) && (board[0][1] == board[0][2])) {
            win = board[0][0];
            columnOne();
        } 
        else if ((board[1][0] == board[1][1]) && (board[1][1] == board[1][2])) {
            win = board[1][0];
            columnTwo();
        }
        else if ((board[2][0] == board[2][1]) && (board[2][1] == board[2][2])) {
            win = board[2][0];
            columnThree();
        }
    
        /* ********** ROW CHECK ********** */
        else if ((board[0][0] == board[1][0]) && (board[1][0] == board[2][0])) {
            win = board[0][0];
            rowOne();
        } 
        else if ((board[0][1] == board[1][1]) && (board[1][1] == board[2][1])) {
            win = board[0][1];
            rowTwo();
        } 
        else if ((board[0][2] == board[1][2]) && (board[1][2] == board[2][2])) {
            win = board[0][2];
            rowThree();
        }
        
        /* ********** DIAGONAL CHECK ********** */
        else if(board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
            win = board[0][0];
            diagonalOne();
        } 
        else if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
            win = board[0][2];
            diagonalTwo()
        } 

         /* ********** DRAW CHECK ********** */
        else if (clickCounter == 9 && win == -1) {
            draw();
        }

        
        /* WINNING CONDITIONS */
        if (win == 1 || win == 2) {
            document.querySelector('.player-turns').style.visibility = 'visible'
            document.querySelector('.reset-btn').style.display = 'block'
            document.querySelector('.prev-btn').style.visibility = 'visible'
            if(win == 1){
                playerWins('p1');
            } else if (win == 2) {
                playerWins('p2');
            }
        }

}

/* ***** NEXT AND PREVIOUS BUTTONS ***** */
document.querySelector('.prev-btn').addEventListener('click', function() {
    gameHistory.push(gameState[gameState.length - 1])
    gameState.pop()
    if(boardPlot[boardPlot.length - 1] == 0) {
        document.querySelector('._0').innerHTML = '';
    } else if(boardPlot[boardPlot.length - 1] == 1) {
        document.querySelector('._1').innerHTML = '';
    } else if(boardPlot[boardPlot.length - 1] == 2) {
        document.querySelector('._2').innerHTML = '';
    } else if(boardPlot[boardPlot.length - 1] == 3) {
        document.querySelector('._3').innerHTML = '';
    } else if(boardPlot[boardPlot.length - 1] == 4) {
        document.querySelector('._4').innerHTML = '';
    } else if(boardPlot[boardPlot.length - 1] == 5) {
        document.querySelector('._5').innerHTML = '';
    } else if(boardPlot[boardPlot.length - 1] == 6) {
        document.querySelector('._6').innerHTML = '';
    } else if(boardPlot[boardPlot.length - 1] == 7) {
        document.querySelector('._7').innerHTML = '';
    } else if(boardPlot[boardPlot.length - 1] == 8) {
        document.querySelector('._8').innerHTML = '';
    }
    if(player == 1){
        player = 2;
    } else if(player == 2){
        player = 1;
    }
    boardPlotHistory.push(boardPlot[boardPlot.length - 1])
    boardPlot.pop()
    document.querySelector('.next-btn').style.pointerEvents = 'auto'
    if(boardPlot.length <= 0) {
        document.querySelector('.prev-btn').style.visibility = 'hidden'
        document.querySelector('.prev-btn').style.pointerEvents = 'none'
    }
    if(boardPlotHistory.length >= 1) {
        document.querySelector('.next-btn').style.visibility = 'visible'
    }
})

document.querySelector('.next-btn').addEventListener('click', function() {
    gameState.push(gameHistory[gameHistory.length - 1])
    gameHistory.pop()
    if(boardPlotHistory[boardPlotHistory.length - 1] == 0) {
        nextButtonPlayerCondition(player, '._0'); 
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 1) {
        nextButtonPlayerCondition(player, '._1');
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 2) {
        nextButtonPlayerCondition(player, '._2');
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 3) {
        nextButtonPlayerCondition(player, '._3');
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 4) {
        nextButtonPlayerCondition(player, '._4');
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 5) {
        nextButtonPlayerCondition(player, '._5');
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 6) {
        nextButtonPlayerCondition(player, '._6');
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 7) {
        nextButtonPlayerCondition(player, '._7');
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 8) {
        nextButtonPlayerCondition(player, '._8');
    }
    if(player == 1){
        player = 2;
    } else if(player == 2){
        player = 1;
    }
    boardPlot.push(boardPlotHistory[boardPlotHistory.length - 1])
    boardPlotHistory.pop()
    document.querySelector('.prev-btn').style.pointerEvents = 'auto'
    if(boardPlotHistory.length <= 0) {
        document.querySelector('.next-btn').style.pointerEvents = 'none'
        document.querySelector('.next-btn').style.visibility = 'hidden'
    }
    if(boardPlot.length >= 1) {
        document.querySelector('.prev-btn').style.visibility = 'visible'
    }
})
/* ***** RESET FUNCTION ***** */
const reset = () => {
    let cols = document.querySelectorAll('.col')
    Array.from(cols).map((col) => {
        col.innerHTML = '';
    })  
    player = 1;
    win = -1;
    clickCounter = 0;
    board = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i']
    ]
    game = [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    gameState = []
    gameHistory = []

    boardPlot = [];
    boardPlotHistory = [];
    resetDocuments();
}
document.querySelector('.reset-btn').addEventListener('click', reset)

export default clickedCell;