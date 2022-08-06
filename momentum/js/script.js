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
    if (hours > 6 && hours < 12) {
        return 'morning'
    }
    if (hours > 12 && hours < 17) {
        return 'day'
    }
    if (hours > 17 && hours < 21) {
        return 'evening'
    }
    if (hours > 21 && hours < 6) {
        return 'night'
    }
    console.log(hours)
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