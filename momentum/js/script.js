// imports
import playList from './playList.js';

// menu
const menuIcon = document.querySelector('.footer__settings');
const menu = document.querySelector('.menu');
function openMenu() {
    if (menu.style.display = 'none') {
        menu.style.display = 'block';
    }
}
menuIcon.addEventListener('click', openMenu)

// timeAndDate
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

// greeting
function showGreeting() {
    const greeting = document.querySelector('.greeting')
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
    setTimeout(showGreeting, 1000);
}

// slider
let randomNumber
function getRandomNum() {
    let randomNumber = (Math.floor(Math.random() * 21)).toString().padStart(2, 0);
    return randomNumber;
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
    if (flickrMenu.classList.contains('active-api')) {
        BgNum = (Number(getRandomNum())).toString();
        getLinkToImageFlickr()
    } else if (unsplashMenu.classList.contains('active-api')) {
        getLinkToImageUnsplash()
    } else {
        BgNum = (Number(BgNum) + 1).toString().padStart(2, 0);
        setBg()
    }
}
function getSlidePrev() {
    if (BgNum == '01') {
        BgNum = '21';
    }
    if (flickrMenu.classList.contains('active-api')) {
        BgNum = (Number(getRandomNum())).toString();
        getLinkToImageFlickr()
    } else if (unsplashMenu.classList.contains('active-api')) {
        getLinkToImageUnsplash()
    } else {
        BgNum = (Number(BgNum) - 1).toString().padStart(2, 0);
        setBg()
    }
}
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')
slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)
const city = document.querySelector('.city')
city.value = 'Minsk'
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=e4a989e855ac16126d1cab47073def89&units=metric`
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.ceil(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.ceil(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`
}
getWeather()

// localStorage
function setLocalStorage() {
    const name = document.querySelector('.name')
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
    const name = document.querySelector('.name')
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}
window.addEventListener('load', getLocalStorage)


const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')

city.addEventListener('change', getWeather)

// quotes
async function getQuotes() {
    const quotes = 'js/data.json';
    const res = await fetch(quotes);
    const data = await res.json()
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const quoteRandom = Math.round(Math.random() * 19);
    quote.textContent = data[quoteRandom].text;
    author.textContent = data[quoteRandom].author;
}
getQuotes();

const changeQuote = document.querySelector('.change-quote');
changeQuote.addEventListener('click', getQuotes);

// audioPlayer
let isPlay = false;
const audio = new Audio();
function playAudio() {
    if (isPlay == false) {
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
        play.classList.add('pause');
        playItem[playNum].classList.add('item-active');
    } else if (isPlay == true) {
        audio.pause();
        isPlay = false;
        play.classList.remove('pause');
    }

}
const play = document.querySelector('.play');
for (let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    const playListUl = document.querySelector('.play-list')
    li.classList.add('play-item')
    li.textContent = playList[i].title;
    playListUl.append(li)
}
const playItem = document.querySelectorAll('.play-item')
const playerIcon = document.querySelector('.player-icon')
play.addEventListener('click', playAudio)
let playNum = 0
function playPrev() {
    playItem[playNum].classList.remove('item-active');
    playNum -= 1;
    isPlay = false;
    if (playNum == -1) {
        playNum = playList.length - 1
    }
    playAudio()
    playItem[playNum].classList.add('item-active');
}
function playNext() {
    playItem[playNum].classList.remove('item-active');
    playNum += 1;
    isPlay = false;
    if (playNum == playList.length) {
        playNum = 0
    }
    playAudio()
    playItem[playNum].classList.add('item-active');
}
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);

// imageApi

async function getLinkToImageUnsplash() {
    let timeOfDay = getTimeOfDay();
    if (mountains.classList.contains('active-tag')) {
        timeOfDay = 'mountains';
    }
    if (water.classList.contains('active-tag')) {
        timeOfDay = 'water';
    }
    if (armenia.classList.contains('active-tag')) {
        timeOfDay = 'armenia';
    }
    const imageUrl = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=sVHBfL4xfck6_oe_5pbmD9FaTIZb60S3H-73Wuoj8D0`;
    const res = await fetch(imageUrl);
    const data = await res.json();
    const body = document.querySelector('.body');
    const img = new Image();
    img.src = data.urls.regular;
    img.onload = () => {
        body.style.backgroundImage = `url(${data.urls.regular})`;
    }
}

async function getLinkToImageFlickr() {
    let timeOfDay = getTimeOfDay();
    if (mountains.classList.contains('active-tag')) {
        timeOfDay = 'mountains';
    }
    if (water.classList.contains('active-tag')) {
        timeOfDay = 'water';
    }
    if (armenia.classList.contains('active-tag')) {
        timeOfDay = 'armenia';
    }
    console.log(timeOfDay)
    const imageUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b90c30c7389a881fb786183065ef8aca&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(imageUrl);
    const data = await res.json();
    const body = document.querySelector('.body');
    const img = new Image();
    img.src = data.photos.photo[parseInt(BgNum, 10)].url_l;
    img.onload = () => {
        body.style.backgroundImage = `url(${data.photos.photo[parseInt(BgNum, 10)].url_l})`;
    }
}
// menu
const unsplashMenu = document.getElementById('Unsplash');
const flickrMenu = document.getElementById('Flickr');
const githubMenu = document.getElementById('Github');
const russianMenu = document.getElementById('Russian');
const englishMenu = document.getElementById('English');
const timeMenu = document.getElementById('Time');
const time = document.querySelector('.time');
const dateMenu = document.getElementById('Date');
const date = document.querySelector('.date');
const greetingMenu = document.getElementById('Greeting');
const greeting = document.querySelector('.greeting-container');
const quotesMenu = document.getElementById('Quotes');
const quotes = document.querySelector('.quote');
const quotesAuthor = document.querySelector('.author');
const quotesChange = document.querySelector('.change-quote');
const weatherMenu = document.getElementById('Weather');
const weather = document.querySelector('.weather');
const audioplayerMenu = document.getElementById('Audioplayer');
const audioplayer = document.querySelector('.player');
const toDoMenu = document.getElementById('ToDo');
const toDo = document.querySelector('.time');
const mountains = document.getElementById('Mountains');
const water = document.getElementById('Water');
const armenia = document.getElementById('Armenia');


flickrMenu.addEventListener('click', () => {
    flickrMenu.classList.add('active-api');
    flickrMenu.classList.add('active');
    githubMenu.classList.remove('active-api');
    githubMenu.classList.remove('active');
    unsplashMenu.classList.remove('active-api');
    unsplashMenu.classList.remove('active');
    getLinkToImageFlickr();
});
unsplashMenu.addEventListener('click', () => {
    flickrMenu.classList.remove('active-api');
    flickrMenu.classList.remove('active');
    githubMenu.classList.remove('active-api');
    githubMenu.classList.remove('active');
    unsplashMenu.classList.add('active-api');
    unsplashMenu.classList.add('active');
    getLinkToImageUnsplash()
});
githubMenu.addEventListener('click', () => {
    flickrMenu.classList.remove('active-api');
    flickrMenu.classList.remove('active');
    githubMenu.classList.add('active-api');
    githubMenu.classList.add('active');
    unsplashMenu.classList.remove('active-api');
    unsplashMenu.classList.remove('active');
    setBg()
});
russianMenu.addEventListener('click', () => {
    russianMenu.classList.add('active');
    englishMenu.classList.remove('active');
});
englishMenu.addEventListener('click', () => {
    englishMenu.classList.add('active');
    russianMenu.classList.remove('active');
});

timeMenu.addEventListener('click', () => {
    time.classList.toggle('hide');
    timeMenu.classList.toggle('active');
})
dateMenu.addEventListener('click', () => {
    date.classList.toggle('hide');
    dateMenu.classList.toggle('active');
})
greetingMenu.addEventListener('click', () => {
    greeting.classList.toggle('hide');
    greetingMenu.classList.toggle('active');
})
quotesMenu.addEventListener('click', () => {
    quotes.classList.toggle('hide');
    quotesAuthor.classList.toggle('hide');
    quotesChange.classList.toggle('hide');
    quotesMenu.classList.toggle('active');
})
weatherMenu.addEventListener('click', () => {
    weather.classList.toggle('hide');
    weatherMenu.classList.toggle('active');
})
audioplayerMenu.addEventListener('click', () => {
    audioplayer.classList.toggle('hide');
    audioplayerMenu.classList.toggle('active');
})
mountains.addEventListener('click', () => {
    mountains.classList.toggle('active-tag');
    mountains.classList.toggle('active');
    armenia.classList.remove('active-tag');
    armenia.classList.remove('active');
    water.classList.remove('active-tag');
    water.classList.remove('active');
    if (flickrMenu.classList.contains('active-api')) {
        getLinkToImageFlickr()
    } else if (unsplashMenu.classList.contains('active-api')) {
        getLinkToImageUnsplash()
    }
})
water.addEventListener('click', () => {
    water.classList.toggle('active-tag');
    water.classList.toggle('active');
    armenia.classList.remove('active-tag');
    armenia.classList.remove('active');
    mountains.classList.remove('active-tag');
    mountains.classList.remove('active');
    if (flickrMenu.classList.contains('active-api')) {
        getLinkToImageFlickr()
    } else if (unsplashMenu.classList.contains('active-api')) {
        getLinkToImageUnsplash()
    }
})
armenia.addEventListener('click', () => {
    armenia.classList.toggle('active-tag');
    armenia.classList.toggle('active');
    water.classList.remove('active-tag');
    water.classList.remove('active');
    mountains.classList.remove('active-tag');
    water.classList.remove('active');
    if (flickrMenu.classList.contains('active-api')) {
        getLinkToImageFlickr()
    } else if (unsplashMenu.classList.contains('active-api')) {
        getLinkToImageUnsplash()
    }
})
todoMenu.addEventListener('click', () => {
    todo.classList.toggle('hide');
    toDoMenu.classList.toggle('active');
})