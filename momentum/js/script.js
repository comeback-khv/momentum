function showDateAndTime() {
    const time = document.querySelector('.time');
    const date = document.querySelector('.date');
    const dateNew = new Date();
    const options = { month: 'long', day: 'numeric', weekday: 'long'};
    const currentDate = dateNew.toLocaleDateString('en-En', options);
    const currentTime = dateNew.toLocaleTimeString();
    time.textContent = currentTime;
    date.textContent = currentDate;
    setTimeout(showDateAndTime, 1000);
}
showDateAndTime();
