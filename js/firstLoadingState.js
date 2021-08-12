const firstLoadingState = () => {
    document.getElementsByClassName("popup")[0].classList.add('active')
    document.querySelector('#footer .reset-btn').disabled = true
    document.querySelector('.fa-cog').style.pointerEvents = 'none'
    document.querySelector('.player1-color-input').value = localStorage.getItem('p1-color')
    document.querySelector('.player2-color-input').value = localStorage.getItem('p2-color')
    Array.from(document.querySelectorAll('.col')).map((col) => {
        col.style.pointerEvents = 'none';
     })
}

export default firstLoadingState;