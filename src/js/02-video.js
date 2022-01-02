import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on('timeupdate', throttle(()=>{player.getCurrentTime().then(sec => {localStorage.setItem('videoplayer-current-time',JSON.stringify(sec))})},1000))
const videoStart = JSON.parse(localStorage.getItem('videoplayer-current-time'))
console.log(videoStart);
player.setCurrentTime(videoStart)