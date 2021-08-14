let fromSettings = false;

/* MODAL FOR RULES*/
export const dismisspopup = () => {
    document.querySelector(".choose-color").classList.add('active');
    document.getElementsByClassName("popup")[0].classList.remove('active');
}

/* MODAL FOR CHOOSING PLAYER COLOR*/
export const chooseYourColor = () =>{
    document.querySelector(".choose-color").classList.remove('active');
    document.querySelector('.choose-player').classList.add('active');
    document.querySelector('.okay-change-name').style.display = "none";

    localStorage.setItem('p1-color', document.querySelector('.player1-color-input').value)
    localStorage.setItem('p2-color', document.querySelector('.player2-color-input').value)
    document.querySelector('.player-name-p1').style.background = localStorage.getItem('p1-color');
    document.querySelector('.player-name-p1').style.border = `2px solid ${localStorage.getItem('p1-color')}`;
    document.querySelector('.player-name-p2').style.background = localStorage.getItem('p2-color');
    document.querySelector('.player-name-p2').style.border = `2px solid ${localStorage.getItem('p2-color')}`;

    document.querySelector('.x-checker-p1').style.textShadow = `1px 1px 2px black, 2px 2px 5px ${localStorage.getItem('p1-color')}`
    document.querySelector('.o-checker-p1').style.textShadow = `1px 1px 2px black, 2px 2px 5px ${localStorage.getItem('p1-color')}`

    document.querySelector('.x-checker-p2').style.textShadow = `1px 1px 2px black, 2px 2px 5px ${localStorage.getItem('p2-color')}`
    document.querySelector('.o-checker-p2').style.textShadow = `1px 1px 2px black, 2px 2px 5px ${localStorage.getItem('p2-color')}`
} 

/* MODAL FOR PLAYER NAMES INPUT */

export const inputP1Handler = (event) => {
    document.querySelector('.p1-name').innerHTML = event.target.value;
    if(event.target.value.length <= 0) {
        document.querySelector('.p1-name').innerHTML = 'Player 1'
    }
}
export const inputP2Handler = (event) => {
    document.querySelector('.p2-name').innerHTML = event.target.value;
    if(event.target.value.length <= 0) {
        document.querySelector('.p2-name').innerHTML = 'Player 2'
    }
}

export const gameStart = () => {

    localStorage.setItem('p1', document.querySelector('.player1-input').value)
    localStorage.setItem('p2', document.querySelector('.player2-input').value)
    if(localStorage.getItem('p1').length == 0) {
        localStorage.setItem('p1', 'Player 1')
    } 
    document.querySelector('.p1-name').innerHTML = localStorage.getItem('p1')

    if(localStorage.getItem('p2').length == 0) {
        localStorage.setItem('p2', 'Player 2')
    }
    document.querySelector('.p2-name').innerHTML = localStorage.getItem('p2')

    document.querySelector('.choose-player').classList.remove('active');
    // document.querySelector(".choose-checkers-player1").classList.add('active')

    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
    document.querySelector('.checkers .o-checker-p2').style.background = 'unset';
    document.querySelector('.checkers .x-checker-p2').style.background = 'unset';
    document.querySelector('.o-checker-p2').classList.remove('active-checker-p2')
    document.querySelector('.x-checker-p2').classList.remove('active-checker-p2')
    document.querySelector('#footer .reset-btn').disabled = false;
    document.querySelector('.fa-cog').style.pointerEvents = 'auto';
    Array.from(document.querySelectorAll('.col')).map((col) => {
        col.style.pointerEvents = 'auto';
     })

}

/* MODAL FOR PLAYER 1 CHOOSING A CHECKER */
// export const chooseCheckersPlayer2 = () => {
//     document.querySelector(".choose-checkers-player1").classList.remove('active');
//     document.querySelector(".choose-checkers-player2").classList.add('active')
// }

/* MODAL FOR PLAYER 2 CHOOSING A CHECKER */
export const startGame = () => {
    document.querySelector(".choose-checkers-player2").classList.remove('active');
    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`

    document.querySelector('.checkers .o-checker-p2').style.background = 'unset';
    document.querySelector('.checkers .x-checker-p2').style.background = 'unset';
    document.querySelector('.o-checker-p2').classList.remove('active-checker-p2')
    document.querySelector('.x-checker-p2').classList.remove('active-checker-p2')

    document.querySelector('#footer .reset-btn').disabled = false;
    document.querySelector('.fa-cog').style.pointerEvents = 'auto';
    Array.from(document.querySelectorAll('.col')).map((col) => {
        col.style.pointerEvents = 'auto';
     })
}


/* THIS IS FOR PLAYER 1, PICKING A CHECKER */
export const xp1PickChecker = () => {
    document.querySelector('.x-checker-p1').classList.add('active-checker-p1')
    document.querySelector('.o-checker-p1').classList.remove('active-checker-p1')
    if(fromSettings) {
        document.querySelector('.okay-change-name').style.display = "none";
    } else {
        document.querySelector('.okay-change-name').style.display = "block";
    }   
    
    document.querySelector('.x-checker-p1').style.color = "#fff"
    document.querySelector('.o-checker-p1').style.color = "#fff"
    localStorage.setItem('p1-checker', 'X')
    localStorage.setItem('p2-checker', 'O')

    /* THIS IS FOR PLAYER 2, PICKING A CHECKER */
    document.querySelector('.checkers .x-checker-p2').style.background = 'lightgray';
    document.querySelector('.checkers .o-checker-p2').style.background = '#fff';
    document.querySelector('.o-checker-p2').classList.add('active-checker-p2')
    document.querySelector('.x-checker-p2').classList.remove('active-checker-p2')
}
export const op1PickChecker = () => {
    document.querySelector('.o-checker-p1').classList.add('active-checker-p1')
    document.querySelector('.x-checker-p1').classList.remove('active-checker-p1')
    if(fromSettings) {
        document.querySelector('.okay-change-name').style.display = "none";
    } else {
        document.querySelector('.okay-change-name').style.display = "block";
    } 
    document.querySelector('.x-checker-p2').style.color = "#fff"
    document.querySelector('.o-checker-p2').style.color = "#fff"
    localStorage.setItem('p1-checker', 'O')
    localStorage.setItem('p2-checker', 'X')

    /* THIS IS FOR PLAYER 2, PICKING A CHECKER */
    document.querySelector('.checkers .o-checker-p2').style.background = 'lightgray';
    document.querySelector('.checkers .x-checker-p2').style.background = '#fff';
    document.querySelector('.x-checker-p2').classList.add('active-checker-p2')
    document.querySelector('.o-checker-p2').classList.remove('active-checker-p2')
}


/* In game, Button Rules */
export const rules = () => {
    document.querySelector(".settings").classList.remove('active')
    document.getElementsByClassName("popup")[0].classList.add('active');
    document.querySelector('.popup .close-popup-btn').style.display = 'block';
    document.querySelector('.popup #dismiss-popup-btn').style.display = 'none';
}

/* In game, Button Change Name */
export const changeName = () => {
    document.querySelector(".settings").classList.remove('active')
    document.querySelector(".choose-player").classList.add('active');
    document.querySelector('.dismiss-btn .okay-change-name').style.display = 'none';
    document.querySelector('.choose-player .close-popup-btn').style.display = 'block';
    if(localStorage.getItem('p1-checker') == 'X'){
        document.querySelector('.o-checker-p2').classList.add('active-checker-p2')
        document.querySelector('.x-checker-p2').style.background = 'lightgray';
    } else {
        document.querySelector('.o-checker-p2').classList.remove('active-checker-p2')
        document.querySelector('.o-checker-p2').style.background = 'lightgray';
        document.querySelector('.x-checker-p2').classList.add('active-checker-p2')
    }
    fromSettings = true;
}

/* In game, Button Change Color */
export const changeColor = () => {
    document.querySelector(".settings").classList.remove('active')
    document.querySelector(".choose-color").classList.add('active');
    document.querySelector('.dismiss-btn .okay-change-color').style.display = 'none';
    document.querySelector('.choose-color .close-popup-btn').style.display = 'block';
}

/* In game, Button Change Checker */
export const changeChecker = () => {
    document.querySelector(".settings").classList.remove('active')
    document.querySelector(".choose-checkers-player1").classList.add('active')
}

/* In game, Button Settings */
export const settings = () => {
    document.querySelector(".settings").classList.add('active')
    document.querySelector('.settings .close-popup-btn').style.display = 'block';
    document.querySelector('.reset-btn').style.pointerEvents = 'none'
}

export const close = () => {
    document.getElementsByClassName("popup")[0].classList.remove('active');
    document.querySelector(".player-win").classList.remove('active')
    document.querySelector(".settings").classList.remove('active')
    document.querySelector(".choose-color").classList.remove('active');
    document.querySelector('.reset-btn').style.pointerEvents = 'auto';
    document.querySelector('.prev-btn').style.pointerEvents = 'auto';
    document.querySelector('.next-btn').style.pointerEvents = 'auto';
    

    localStorage.setItem('p1-color', document.querySelector('.player1-color-input').value)
    localStorage.setItem('p2-color', document.querySelector('.player2-color-input').value)
    document.querySelector('.player-name-p1').style.background = localStorage.getItem('p1-color');
    document.querySelector('.player-name-p1').style.border = `2px solid ${localStorage.getItem('p1-color')}`;
    document.querySelector('.player-name-p2').style.background = localStorage.getItem('p2-color');
    document.querySelector('.player-name-p2').style.border = `2px solid ${localStorage.getItem('p2-color')}`;

    document.querySelector(".choose-player").classList.remove('active');
    localStorage.setItem('p1', document.querySelector('.player1-input').value)
    localStorage.setItem('p2', document.querySelector('.player2-input').value)
    if(localStorage.getItem('p1').length == 0) {
        localStorage.setItem('p1', 'Player 1')
    } 
    document.querySelector('.p1-name').innerHTML = localStorage.getItem('p1')

    if(localStorage.getItem('p2').length == 0) {
        localStorage.setItem('p2', 'Player 2')
    }
}


document.getElementById('dismiss-popup-btn').addEventListener('click', dismisspopup)
document.querySelector('.okay-change-color').addEventListener('click', chooseYourColor)
document.querySelector('.okay-change-name').addEventListener('click', gameStart)
document.querySelector('.x-checker-p1').addEventListener('click', xp1PickChecker)
document.querySelector('.o-checker-p1').addEventListener('click', op1PickChecker)
document.querySelector('.rules').addEventListener('click', rules)
document.querySelector('.close-popup-btn').addEventListener('click', close)
document.querySelector('.change-player-name').addEventListener('click', changeName)
document.querySelector('.choose-player .close-popup-btn').addEventListener('click', close)
document.querySelector('.change-player-color').addEventListener('click', changeColor)
document.querySelector('.choose-color .close-popup-btn').addEventListener('click', close)
document.querySelector('.change-player-checker').addEventListener('click', changeChecker)
document.querySelector('.fa-cog').addEventListener('click', settings)
document.querySelector('.settings .close-popup-btn').addEventListener('click', close)
document.querySelector('.player-win .close-popup-btn').addEventListener('click', close)
document.querySelector('.player1-input').addEventListener('input', inputP1Handler)
document.querySelector('.player2-input').addEventListener('input', inputP2Handler)
