const player = document.querySelector('.player');
const video = document.querySelector('.video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const speed = document.querySelector('.player-speed');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');
//play and pause features
function showPlayIcon() {

}

function togglePlayPause() {
    if (video.paused) {
        video.play()
        playBtn.classList.replace('fa-play', 'fa-pause')
        playBtn.setAttribute("title", "pause")

    } else {
        video.pause()
        playBtn.classList.replace("fa-pause", "fa-play")
        playBtn.setAttribute("title", "playyyy")
    }
}

// when my video ends, play icon show be displayed 
video.addEventListener("ended", showPlayIcon)


//progress bar 


function displayTime(time) {
    const minutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    seconds = seconds > 9 ? seconds : `0${seconds}`
    return `${minutes}:${seconds}`
}

function updateProgressBar() {
    progressBar.style.width = `${(video.currentTime/video.duration)*100}`
    currentTime.textContent = `${displayTime(video.currentTime)}`
    duration.textContent = `${displayTime(video.duration)}`



}

function seekProgress(event) {
    const seekTime = event.offsetX / progressRange.offsetWidth
    progressBar.style.width = `${seekTime*100}%`
    video.currentTime = seekTime * video.duration
}


//volume speaker 
function audiospeaker(event) {
    let volume = event.offsetX / volumeRange.offsetWidth
    if (volume < 0.1) {
        volume = 0
    } else if (volume > 0.9) {
        volume = 1
    }
    volume
    volumeRange.style.width = `${volume*100}%`
}



//playback speed change 
function changeVideoSpeed() {
    video.playbackRate = speed.value
}
//fullscreen features
function openFullscreen() {
    if (element.requestFullscreen()) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        elememt.webkitRequestFullscreen();

    }
}

//toggle

let fullscreen = false;

function toggleFullscreen() {
    if (!fullscreen) {

    }
}





//event listeners
playBtn.addEventListener("click", togglePlayPause)
    //click anywhere in the video
video.addEventListener("click", togglePlayPause)
video.addEventListener("timeupdate", updateProgressBar)

//wnenever currentTime is updated, timeupdate event is fired immediately
progressRange.addEventListener("click", seekProgress)
volumeRange.addEventListener("click", audiospeaker)
speed.addEventListener("change", changeVideoSpeed)