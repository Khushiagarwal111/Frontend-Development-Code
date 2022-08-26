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


//play and pause feature

function showPlayIcon() {
    playBtn.classList.replace('fa-pause', 'fa-play')
    playBtn.setAttribute("title", "play")

}

function togglePlayPause() {
    if (video.paused) {
        video.play()
        playBtn.classList.replace('fa-play', 'fa-pause')
        playBtn.setAttribute("title", "pause")
    } else {
        video.pause()
        showPlayIcon()

    }
}


//when my video end , play icon should be displayed
video.addEventListener("ended", showPlayIcon)


//progress bar

function displayTime(time) {
    const minutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    seconds = seconds > 9 ? seconds : `0${seconds}`
    return `${minutes}:${seconds}`
}

function updateProgressBar() {
    progressBar.style.width = `${(video.currentTime/video.duration)*100}%`
    currentTime.textContent = `${displayTime(video.currentTime)}`
    duration.textContent = `${displayTime(video.duration)}`
}

function seekProgress(event) {
    const seekTime = event.offsetX / progressRange.offsetWidth
    progressBar.style.width = `${seekTime*100}%`
    video.currentTime = seekTime * video.duration
}

//volume feature


function audioSeeker(event) {
    let volume = event.offsetX / volumeRange.offsetWidth

    if (volume < 0.1) {
        volume = 0
    } else if (volume > 0.9) {
        volume = 1
    }
    volumeBar.style.width = `${volume*100}%`
    video.volume = volume
}

//playback speed
function changeVideoSpeed() {
    video.playbackRate = speed.value
}
// fullscreen feature
// guyysss here I was not passing the elem as the parameter
// so when I plssed player while calling it 
// it could not take the value :)
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    video.classList.add("video-fullscreen")
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    video.classList.remove("video-fullscreen")
}

//toggle
let fullscreen = false

function toggleFullScreenVideo() {
    if (!fullscreen) { // here fullscreen is set to false
        openFullscreen(player)
    } else {
        closeFullscreen()
    }
    fullscreen = !fullscreen
}
//event listeners
playBtn.addEventListener("click", togglePlayPause)
    //click anywhere in the video the video will be paused or play
video.addEventListener("click", togglePlayPause)
video.addEventListener("timeupdate", updateProgressBar)
    //whenever currentTime is updated , timeupdate event is fired 
progressRange.addEventListener("click", seekProgress)

volumeRange.addEventListener("click", audioSeeker)
speed.addEventListener("change", changeVideoSpeed)

fullscreenBtn.addEventListener("click", toggleFullScreenVideo)