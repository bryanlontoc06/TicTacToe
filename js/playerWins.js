const playerWins = (player) => {
    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem(`${player}`)} wins`
    document.querySelector('.player-win').classList.add('active')
    document.querySelector('.player-win .title').innerHTML = `${localStorage.getItem(`${player}`)} wins`
    document.querySelector('.player-win .description img').src = `./public/thumbs-up-emoji-gif.gif`
    document.querySelector('.player-win .close-popup-btn ').style.display = 'block';
    document.querySelector('.reset-btn').style.pointerEvents = 'none';
    document.querySelector('.prev-btn').style.pointerEvents = 'none';
    document.querySelector('.next-btn').style.pointerEvents = 'none';
}

export default playerWins
