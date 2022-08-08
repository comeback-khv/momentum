function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}
showTime();

function showDate() {
    const date = document.querySelector('.date');
    const dateNew = new Date();
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    const currentDate = dateNew.toLocaleDateString('en-En', options);
    date.textContent = currentDate;
}

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 6 && hours < 12) {
        return 'morning'
    }
    if (hours >= 12 && hours < 17) {
        return 'afternoon'
    }
    if (hours >= 17 && hours < 21) {
        return 'evening'
    }
    if (hours >= 21 | hours < 6) {
        return 'night'
    }
}

function showGreeting() {
    const greeting = document.querySelector('.greeting')
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
    setTimeout(showGreeting, 1000);
}
function setLocalStorage() {
    const name = document.querySelector('.name')
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    const name = document.querySelector('.name')
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)

function getRandomNum() {
    return randomNumber = (Math.floor(Math.random() * 21)).toString().padStart(2, 0);
}
let BgNum = getRandomNum();
function setBg() {
    const body = document.querySelector('.body')
    const timeOfDay = getTimeOfDay();
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/comeback-khv/stage1-tasks/assets/images/${timeOfDay}/${BgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url(https://raw.githubusercontent.com/comeback-khv/stage1-tasks/assets/images/${timeOfDay}/${BgNum}.jpg)`;
    }
}
setBg();
function getSlideNext() {
    if (BgNum == '20') {
        BgNum = '00';
    }
    BgNum = (Number(BgNum) + 1).toString().padStart(2, 0);;
    setBg()
}
function getSlidePrev() {
    if (BgNum == '01') {
        BgNum = '21';
    }
    BgNum = (Number(BgNum) - 1).toString().padStart(2, 0);;
    console.log(typeof (BgNum))
    setBg()
}
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')
slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)