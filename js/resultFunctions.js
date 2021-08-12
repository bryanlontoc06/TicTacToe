/* ********** COLUMN CHECK ********** */ 
export const columnOne = () => {
    document.querySelector("._00").style.color = 'red'  
    document.querySelector("._01").style.color = 'red'  
    document.querySelector("._02").style.color = 'red'
    document.querySelector("._00").classList.add('blink')  
    document.querySelector("._01").classList.add('blink')  
    document.querySelector("._02").classList.add('blink')
    /*    Board Map
        [***][1,0][2,0]
        [***][1,1][2,1]
        [***][1,2][2,2]
    */
}

export const columnTwo = () => {
    document.querySelector("._10").style.color = 'red'  
    document.querySelector("._11").style.color = 'red'  
    document.querySelector("._12").style.color = 'red'
    document.querySelector("._10").classList.add('blink')  
    document.querySelector("._11").classList.add('blink')  
    document.querySelector("._12").classList.add('blink')
    /*    Board Map
        [0,0][***][2,0]
        [0,1][***][2,1]
        [0,2][***][2,2]
    */
}

export const columnThree = () => {
    document.querySelector("._20").style.color = 'red'  
    document.querySelector("._21").style.color = 'red'  
    document.querySelector("._22").style.color = 'red'
    document.querySelector("._20").classList.add('blink')  
    document.querySelector("._21").classList.add('blink')  
        document.querySelector("._22").classList.add('blink')
    /*    Board Map
        [0,0][1,0][***]
        [0,1][1,1][***]
        [0,2][1,2][***]
    */
}



/* ********** ROW CHECK ********** */ 
export const rowOne = () => {
        document.querySelector("._00").style.color = 'red'  
        document.querySelector("._10").style.color = 'red'  
        document.querySelector("._20").style.color = 'red'
        document.querySelector("._00").classList.add('blink')  
        document.querySelector("._10").classList.add('blink')  
        document.querySelector("._20").classList.add('blink')
    /*    Board Map
        [***][***][***]
        [0,1][1,1][2,1]
        [0,2][1,2][2,2]
    */
} 

export const rowTwo = () => {
        document.querySelector("._01").style.color = 'red'  
        document.querySelector("._11").style.color = 'red'  
        document.querySelector("._21").style.color = 'red'
        document.querySelector("._01").classList.add('blink')  
        document.querySelector("._11").classList.add('blink')  
        document.querySelector("._21").classList.add('blink')
    /*    Board Map
        [0,0][1,0][2,0]
        [***][***][***]
        [0,2][1,2][2,2]
    */
} 
export const rowThree = () => {
        document.querySelector("._02").style.color = 'red'  
        document.querySelector("._12").style.color = 'red'  
        document.querySelector("._22").style.color = 'red'
        document.querySelector("._02").classList.add('blink')  
        document.querySelector("._12").classList.add('blink')  
        document.querySelector("._22").classList.add('blink')
    /*    Board Map
        [0,0][1,0][2,0]
        [0,1][1,1][2,1]
        [***][***][***]
    */
}


/* ********** DIAGONAL CHECK ********** */
export const diagonalOne = () => {
        document.querySelector("._00").style.color = 'red'  
        document.querySelector("._11").style.color = 'red'  
        document.querySelector("._22").style.color = 'red'
        document.querySelector("._00").classList.add('blink')  
        document.querySelector("._11").classList.add('blink')  
        document.querySelector("._22").classList.add('blink')
    /*    Board Map
        [***][1,0][2,0]
        [0,1][***][2,1]
        [0,2][1,2][***]
    */
} 
export const diagonalTwo = () => {
        document.querySelector("._02").style.color = 'red'  
        document.querySelector("._11").style.color = 'red'  
        document.querySelector("._20").style.color = 'red'
        document.querySelector("._02").classList.add('blink')  
        document.querySelector("._11").classList.add('blink')  
        document.querySelector("._20").classList.add('blink')
    /*    Board Map
        [0,0][1,0][***]
        [0,1][***][2,1]
        [***][1,2][2,2]
    */
} 



/* ********** DRAW CHECK ********** */
export const draw = () => {
    document.querySelector('.player-turns').innerHTML = 'Draw'
    document.querySelector('.reset-btn').style.display = 'block'

    document.querySelector('.player-win').classList.add('active')
    document.querySelector('.player-win .title').innerHTML = `Draw`
    document.querySelector('.player-win .description img').src = `./public/ok.gif`
    document.querySelector('.player-win .close-popup-btn ').style.display = 'block'

    document.querySelector('.prev-btn').style.visibility = 'visible'
    document.querySelector('.reset-btn').style.pointerEvents = 'none';
    document.querySelector('.prev-btn').style.pointerEvents = 'none';
    document.querySelector('.next-btn').style.pointerEvents = 'none';
}


