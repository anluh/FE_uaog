const $ = require('jquery');
let now = new Date();
let nextSundayUa = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Kiev' }));

// miliseconds to the next upcoming sunday 11:00
function timeToTarget() {
    let now = new Date();
    let todayUa = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Kiev' }));
    let todaysDay = todayUa.getDay();
    nextSundayUa.setDate(todayUa.getDate() + (7 - todaysDay));
    nextSundayUa.setHours(11, 0, 0);

    return Math.abs(todayUa - nextSundayUa);
}

function plural(s, i) {
    return `<div class="countdown_val"> <span>${i}</span> <span class="countdown_sub">${s}</span></div>`;
}

// convert miliseconds duration to human readable
function msReadableDuration() {
    let duration = timeToTarget();
    let seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
        days = Math.floor((duration / (24 * 60 * 60 * 1000) % 7));

    days = (days < 10) ? '0' + days : days;
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    
    return [plural('днів', days),
        plural('годин', hours),
        plural('хвилин', minutes)].join(':');
}

// Save reference to the DIV
let $refresh = $('.js-countdown ');

$refresh.html(msReadableDuration());

// Update DIV contents every second
setInterval(function() {
    $refresh.html(msReadableDuration());
}, 1000 * 60);
