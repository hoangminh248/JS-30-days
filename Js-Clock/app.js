
const $secondHand = document.querySelector(".second-hand");
const $minusHand = document.querySelector(".min-hand");
const $hourHand = document.querySelector(".hour-hand");

const $hour = document.querySelector(".hour");
const $minute = document.querySelector(".minute");
const $second = document.querySelector(".second");

function setDate(){
    const now = new Date();

    const second = now.getSeconds();
    const secondDeg = ((second/60)*360) +90;
    $secondHand.style.transform= `rotate(${secondDeg}deg)`;

    const min = now.getMinutes();
    const minusDeg = ((min/60)*360)+90;
    $minusHand.style.transform=`rotate(${minusDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = ((hour/12)*360)+90;
    $hourHand.style.transform=`rotate(${hourDeg}deg)`;

    $hour.innerHTML=`${hour}:`
    $minute.innerHTML=`${min}:`
    $second.innerHTML=`${second}`
    console.log(hour)
}
setInterval(setDate,1000);

