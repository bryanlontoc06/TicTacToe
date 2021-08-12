import firstLoadingState from './firstLoadingState.js'
import resetDocuments from './resetDocument.js'
import { columnOne, columnTwo, columnThree, rowOne, rowTwo, rowThree, draw, diagonalOne, diagonalTwo } from './resultFunctions.js';
import playerWins from './playerWins.js'


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

firstLoadingState(); // First App State

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
                if (player == 1) {
                    element.innerHTML = localStorage.getItem('p1-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p2')}'s turn`
                    document.querySelector('.change-player-name').style.pointerEvents = "none"
                    document.querySelector('.change-player-color').style.pointerEvents = "none"
                    document.querySelector('.change-player-checker').style.pointerEvents = "none"
                    element.style.color = `#fff`
                    if(player = 1){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p1-color')}`
                    }
                    player = 2;
                } else if (player == 2) {
                    element.innerHTML = localStorage.getItem('p2-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
                    element.style.color = `#fff`
                    if(player = 2){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p2-color')}`
                    }
                    player = 1;
                }
            } else if (elNum == 1) {
                if (player == 1) {
                    element.innerHTML = localStorage.getItem('p1-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p2')}'s turn`
                    document.querySelector('.change-player-name').style.pointerEvents = "none"
                    document.querySelector('.change-player-color').style.pointerEvents = "none"
                    document.querySelector('.change-player-checker').style.pointerEvents = "none"
                    element.style.color = `#fff`
                    if(player = 1){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p1-color')}`
                    }
                    player = 2;
                } else if (player == 2) {
                    element.innerHTML = localStorage.getItem('p2-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
                    element.style.color = `#fff`
                    if(player = 2){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p2-color')}`
                    }
                    player = 1;
                }
            }  else if (elNum == 2) {
                if (player == 1) {
                    element.innerHTML = localStorage.getItem('p1-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p2')}'s turn`
                    document.querySelector('.change-player-name').style.pointerEvents = "none"
                    document.querySelector('.change-player-color').style.pointerEvents = "none"
                    document.querySelector('.change-player-checker').style.pointerEvents = "none"
                    element.style.color = `#fff`
                    if(player = 1){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p1-color')}`
                    }
                    player = 2;
                } else if (player == 2) {
                    element.innerHTML = localStorage.getItem('p2-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
                    element.style.color = `#fff`
                    if(player = 2){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p2-color')}`
                    }
                    player = 1;
                }
            } else if (elNum == 3) {
                if (player == 1) {
                    element.innerHTML = localStorage.getItem('p1-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p2')}'s turn`
                    document.querySelector('.change-player-name').style.pointerEvents = "none"
                    document.querySelector('.change-player-color').style.pointerEvents = "none"
                    document.querySelector('.change-player-checker').style.pointerEvents = "none"
                    element.style.color = `#fff`
                    if(player = 1){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p1-color')}`
                    }
                    player = 2;
                } else if (player == 2) {
                    element.innerHTML = localStorage.getItem('p2-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
                    element.style.color = `#fff`
                    if(player = 2){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p2-color')}`
                    }
                    player = 1;
                }
            }  else if (elNum == 4) {
                if (player == 1) {
                    element.innerHTML = localStorage.getItem('p1-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p2')}'s turn`
                    document.querySelector('.change-player-name').style.pointerEvents = "none"
                    document.querySelector('.change-player-color').style.pointerEvents = "none"
                    document.querySelector('.change-player-checker').style.pointerEvents = "none"
                    element.style.color = `#fff`
                    if(player = 1){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p1-color')}`
                    }
                    player = 2;
                } else if (player == 2) {
                    element.innerHTML = localStorage.getItem('p2-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
                    element.style.color = `#fff`
                    if(player = 2){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p2-color')}`
                    }
                    player = 1;
                }
            }  else if (elNum == 5) {
                if (player == 1) {
                    element.innerHTML = localStorage.getItem('p1-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p2')}'s turn`
                    document.querySelector('.change-player-name').style.pointerEvents = "none"
                    document.querySelector('.change-player-color').style.pointerEvents = "none"
                    document.querySelector('.change-player-checker').style.pointerEvents = "none"
                    element.style.color = `#fff`
                    if(player = 1){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p1-color')}`
                    }
                    player = 2;
                } else if (player == 2) {
                    element.innerHTML = localStorage.getItem('p2-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
                    element.style.color = `#fff`
                    if(player = 2){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p2-color')}`
                    }
                    player = 1;
                }
            }  else if (elNum == 6) {
                if (player == 1) {
                    element.innerHTML = localStorage.getItem('p1-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p2')}'s turn`
                    document.querySelector('.change-player-name').style.pointerEvents = "none"
                    document.querySelector('.change-player-color').style.pointerEvents = "none"
                    document.querySelector('.change-player-checker').style.pointerEvents = "none"
                    element.style.color = `#fff`
                    if(player = 1){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p1-color')}`
                    }
                    player = 2;
                } else if (player == 2) {
                    element.innerHTML = localStorage.getItem('p2-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
                    element.style.color = `#fff`
                    if(player = 2){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p2-color')}`
                    }
                    player = 1;
                }
            }  else if (elNum == 7) {
                if (player == 1) {
                    element.innerHTML = localStorage.getItem('p1-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p2')}'s turn`
                    document.querySelector('.change-player-name').style.pointerEvents = "none"
                    document.querySelector('.change-player-color').style.pointerEvents = "none"
                    document.querySelector('.change-player-checker').style.pointerEvents = "none"
                    element.style.color = `#fff`
                    if(player = 1){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p1-color')}`
                    }
                    player = 2;
                } else if (player == 2) {
                    element.innerHTML = localStorage.getItem('p2-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
                    element.style.color = `#fff`
                    if(player = 2){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p2-color')}`
                    }
                    player = 1;
                }
            }  else if (elNum == 8) {
                if (player == 1) {
                    element.innerHTML = localStorage.getItem('p1-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p2')}'s turn`
                    document.querySelector('.change-player-name').style.pointerEvents = "none"
                    document.querySelector('.change-player-color').style.pointerEvents = "none"
                    document.querySelector('.change-player-checker').style.pointerEvents = "none"
                    element.style.color = `#fff`
                    if(player = 1){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p1-color')}`
                    }
                    player = 2;
                } else if (player == 2) {
                    element.innerHTML = localStorage.getItem('p2-checker');
                    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
                    element.style.color = `#fff`
                    if(player = 2){
                        element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p2-color')}`
                    }
                    player = 1;
                }
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


document.querySelector('.prev-btn').addEventListener('click', function() {
    gameHistory.push(gameState[gameState.length - 1])
    gameState.pop()


    if(boardPlot[boardPlot.length - 1] == 0) {
        document.querySelector('._0').innerHTML = '';
        if(player == 1){
            player = 2;
        } else if(player == 2){
            player = 1;
        }
    } else if(boardPlot[boardPlot.length - 1] == 1) {
        document.querySelector('._1').innerHTML = '';
        if(player == 1){
            player = 2;
        } else if(player == 2){
            player = 1;
        }
    } else if(boardPlot[boardPlot.length - 1] == 2) {
        document.querySelector('._2').innerHTML = '';
        if(player == 1){
            player = 2;
        } else if(player == 2){
            player = 1;
        }
    } else if(boardPlot[boardPlot.length - 1] == 3) {
        document.querySelector('._3').innerHTML = '';
        if(player == 1){
            player = 2;
        } else if(player == 2){
            player = 1;
        }
    } else if(boardPlot[boardPlot.length - 1] == 4) {
        document.querySelector('._4').innerHTML = '';
        if(player == 1){
            player = 2;
        } else if(player == 2){
            player = 1;
        }
    } else if(boardPlot[boardPlot.length - 1] == 5) {
        document.querySelector('._5').innerHTML = '';
        if(player == 1){
            player = 2;
        } else if(player == 2){
            player = 1;
        }
    } else if(boardPlot[boardPlot.length - 1] == 6) {
        document.querySelector('._6').innerHTML = '';
        if(player == 1){
            player = 2;
        } else if(player == 2){
            player = 1;
        }
    } else if(boardPlot[boardPlot.length - 1] == 7) {
        document.querySelector('._7').innerHTML = '';
        if(player == 1){
            player = 2;
        } else if(player == 2){
            player = 1;
        }
    } else if(boardPlot[boardPlot.length - 1] == 8) {
        document.querySelector('._8').innerHTML = '';
        if(player == 1){
            player = 2;
        } else if(player == 2){
            player = 1;
        }
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
        if(player == 1){
            document.querySelector('._0').innerHTML = localStorage.getItem('p1-checker');
            player = 2;
        } else if(player == 2){
            document.querySelector('._0').innerHTML = localStorage.getItem('p2-checker');
            player = 1 ;
        }
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 1) {
        if(player == 1){
            document.querySelector('._1').innerHTML = localStorage.getItem('p1-checker');
            player = 2;
        } else if(player == 2){
            document.querySelector('._1').innerHTML = localStorage.getItem('p2-checker');
            player = 1;
        }
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 2) {
        if(player == 1){
            document.querySelector('._2').innerHTML = localStorage.getItem('p1-checker');
            player = 2;
        } else if(player == 2){
            document.querySelector('._2').innerHTML = localStorage.getItem('p2-checker');
            player = 1;
        }
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 3) {
        if(player == 1){
            document.querySelector('._3').innerHTML = localStorage.getItem('p1-checker');
            player = 2;
        } else if(player == 2){
            document.querySelector('._3').innerHTML = localStorage.getItem('p2-checker');
            player = 1;
        }
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 4) {
        if(player == 1){
            document.querySelector('._4').innerHTML = localStorage.getItem('p1-checker');
            player = 2;
        } else if(player == 2){
            document.querySelector('._4').innerHTML = localStorage.getItem('p2-checker');
            player = 1;
        }
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 5) {
        if(player == 1){
            document.querySelector('._5').innerHTML = localStorage.getItem('p1-checker');
            player = 2;
        } else if(player == 2){
            document.querySelector('._5').innerHTML = localStorage.getItem('p2-checker');
            player = 1;
        }
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 6) {
        if(player == 1){
            document.querySelector('._6').innerHTML = localStorage.getItem('p1-checker');
            player = 2;
        } else if(player == 2){
            document.querySelector('._6').innerHTML = localStorage.getItem('p2-checker');
            player = 1;
        }
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 7) {
        if(player == 1){
            document.querySelector('._7').innerHTML = localStorage.getItem('p1-checker');
            player = 2;
        } else if(player == 2){
            document.querySelector('._7').innerHTML = localStorage.getItem('p2-checker');
            player = 1;
        }
    } else if(boardPlotHistory[boardPlotHistory.length - 1] == 8) {
        if(player == 1){
            document.querySelector('._8').innerHTML = localStorage.getItem('p1-checker');
            player = 2;
        } else if(player == 2){
            document.querySelector('._8').innerHTML = localStorage.getItem('p2-checker');
            player = 1;
        }
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