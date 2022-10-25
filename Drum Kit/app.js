const keys = document.querySelectorAll('.key');

function playSound (event){
    const audio= document.querySelector(`audio.${event.code}`)
    const key = document.querySelector(`div.${event.code}`)
    if (!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing')
}
function removeTransition (event){
    this.classList.remove('playing');
}
window.addEventListener("keypress",playSound)

keys.forEach(key=>{
    key.addEventListener('transitionend',removeTransition)
})