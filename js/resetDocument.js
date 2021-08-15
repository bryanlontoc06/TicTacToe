const resetDocuments = () => {

    // document.querySelector(".popup").classList.add('active');
    document.querySelector('.prev-btn').style.visibility = 'hidden'
    document.querySelector('.next-btn').style.visibility = 'hidden'
    document.querySelector('.prev-btn').style.pointerEvents = 'auto'
    document.querySelector('.next-btn').style.pointerEvents = 'auto'
    document.querySelector('.player-turns').innerHTML = `${localStorage.getItem('p1')}'s turn`
    document.querySelector('.player-turns').style.visibility = 'visible'
    document.querySelector('.change-player-name').style.pointerEvents = "auto"
    document.querySelector('.change-player-color').style.pointerEvents = "auto"
    

    document.querySelector("._00").style.color = '#000'  
    document.querySelector("._01").style.color = '#000'  
    document.querySelector("._02").style.color = '#000'
    document.querySelector("._00").classList.remove('blink')  
    document.querySelector("._01").classList.remove('blink')  
    document.querySelector("._02").classList.remove('blink')

    document.querySelector("._10").style.color = '#000'  
    document.querySelector("._11").style.color = '#000'  
    document.querySelector("._12").style.color = '#000'
    document.querySelector("._10").classList.remove('blink')  
    document.querySelector("._11").classList.remove('blink')  
    document.querySelector("._12").classList.remove('blink')

    document.querySelector("._20").style.color = '#000'  
    document.querySelector("._21").style.color = '#000'  
    document.querySelector("._22").style.color = '#000'
    document.querySelector("._20").classList.remove('blink')  
    document.querySelector("._21").classList.remove('blink')  
    document.querySelector("._22").classList.remove('blink')

    document.querySelector("._00").style.color = '#000'  
    document.querySelector("._10").style.color = '#000'  
    document.querySelector("._20").style.color = '#000'
    document.querySelector("._00").classList.remove('blink')  
    document.querySelector("._10").classList.remove('blink')  
    document.querySelector("._20").classList.remove('blink')

    document.querySelector("._01").style.color = '#000'  
    document.querySelector("._11").style.color = '#000'  
    document.querySelector("._21").style.color = '#000'
    document.querySelector("._01").classList.remove('blink')  
    document.querySelector("._11").classList.remove('blink')  
    document.querySelector("._21").classList.remove('blink')

    document.querySelector("._02").style.color = '#000'  
    document.querySelector("._12").style.color = '#000'  
    document.querySelector("._22").style.color = '#000'
    document.querySelector("._02").classList.remove('blink')  
    document.querySelector("._12").classList.remove('blink')  
    document.querySelector("._22").classList.remove('blink')

    document.querySelector("._00").style.color = '#000'  
    document.querySelector("._11").style.color = '#000'  
    document.querySelector("._22").style.color = '#000'
    document.querySelector("._00").classList.remove('blink')  
    document.querySelector("._11").classList.remove('blink')  
    document.querySelector("._22").classList.remove('blink')

    document.querySelector("._02").style.color = '#000'  
    document.querySelector("._11").style.color = '#000'  
    document.querySelector("._20").style.color = '#000'
    document.querySelector("._02").classList.remove('blink')  
    document.querySelector("._11").classList.remove('blink')  
    document.querySelector("._20").classList.remove('blink')
}

export default resetDocuments;