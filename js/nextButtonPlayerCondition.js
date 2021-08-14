const nextButtonPlayerCondition = (player, elNum) => {
    if(player == 1){
        document.querySelector(elNum).innerHTML = localStorage.getItem('p1-checker');
        player = 2;
    } else if(player == 2){
        document.querySelector(elNum).innerHTML = localStorage.getItem('p2-checker');
        player = 1 ;
    }
}

export default nextButtonPlayerCondition
