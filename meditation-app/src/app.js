import './scss/main.scss';
console.log('Hello, SASS');
console.log('Hello, HTML');

const song = document.querySelector(".song");
const video = document.querySelector(".vid-container video");

const sounds = document.querySelectorAll(".circle__big div div");

const controlPanel = document.querySelector(".circle__big");

const play = document.querySelector(".play");
const replay = document.querySelector(".replay");

const timeDisplay = document.querySelector(".time-display");
const timeSelect = document.querySelectorAll(".time-select div");
const timeControlPanel = document.querySelector(".time-select");

let fakeDuration = 600;


timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
    fakeDuration % 60
  )}`;


controlPanel.addEventListener("click", (event) => {
    if (event.target.classList.contains("circle__small")) {
        sounds.forEach(el => el.classList.remove("active"));
        if (event.target.classList.contains("circle__small")) {
            event.target.classList.add("active");
        }
    }
});


sounds.forEach(sound => {
    sound.addEventListener("click", function() {
        if (this.getAttribute("data-video") && this.getAttribute("data-sound")) {
            song.src = this.getAttribute("data-sound");
            video.src = this.getAttribute("data-video");
            checkPlaying(song);
        };
    });
});


play.addEventListener("click", function() {
    checkPlaying(song);
});

replay.addEventListener("click", function() {
    restartSong(song);
});


const restartSong = song => {
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("ciao")
    timeControlPanel.classList.remove("no__active")
}


timeSelect.forEach(option => {
    option.addEventListener("click", function() {
        fakeDuration = this.getAttribute("data-time");
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
        timeControlPanel.classList.add("no__active")
    });
});

const checkPlaying = song => {
    if (song.paused) {
        song.play();
        video.play();
        play.src = "./img/svg/pause.svg";
        timeControlPanel.classList.add("no__active")
    } else {
        song.pause();
        video.pause();
        play.src = "./img/svg/play.svg";
        sounds.forEach(el => el.classList.remove("active"));
        timeControlPanel.classList.remove("no__active")

    }
};


song.ontimeupdate = function() {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    timeDisplay.textContent = `${minutes}:${seconds}`;


    if (currentTime >= fakeDuration) {
        song.pause();
        song.currentTime = 0;
        play.src = "./img/svg/play.svg";
        video.pause();
        sounds.forEach(el => el.classList.remove("active"));
        timeControlPanel.classList.remove("no__active");
    }
};