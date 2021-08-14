const playerClick = (player, element) => {
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
    } 
    else {
        element.innerHTML = localStorage.getItem('p2-checker');
        document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
        element.style.color = `#fff`
        if(player = 2){
            element.style.textShadow = `2px 2px 5px ${localStorage.getItem('p2-color')}`
        }
        player = 1;
    }
}

export default playerClick;