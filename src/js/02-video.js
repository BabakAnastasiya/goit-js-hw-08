import throttle from "lodash/throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(videoStart, 1000)); 

function videoStart(timeToStart) {
    console.log(timeToStart); 
    localStorage.setItem("videoplayer-current-time", timeToStart.seconds);
}; 

const stopTime = localStorage.getItem("videoplayer-current-time");
console.log(stopTime);

player.setCurrentTime(stopTime).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});