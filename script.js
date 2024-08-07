function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.getElementById('second');
    const minuteHand = document.getElementById('minute');
    const hourHand = document.getElementById('hour');

    secondHand.setAttribute('transform', `rotate(${seconds * 6}, 50, 50)`);
    minuteHand.setAttribute('transform', `rotate(${minutes * 6 + seconds / 10}, 50, 50)`);
    hourHand.setAttribute('transform', `rotate(${hours * 30 + minutes / 2}, 50, 50)`);
}

setInterval(updateClock, 1000);
updateClock();
