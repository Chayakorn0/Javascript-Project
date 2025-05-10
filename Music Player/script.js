const music_container = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progress_container = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ["Contra","HarvestMoon","Mario"];
let index = 1;

function loadSongs(song) {
    title.innerText = `${song} song`;
    cover.src = `Cover/${song}.jpg`;
    audio.src = `Music/${song}.mp3`
}

loadSongs(songs[index]);

playBtn.addEventListener('click',()=>{
    const isPlay = music_container.classList.contains('play');
    if(isPlay) {
        pauseSong();
    }
    else {
        playSong();
    }
});

prevBtn.addEventListener('click',()=>{
    index--;
    if(index < 0) {
        index = songs.length - 1;
    }
    loadSongs(songs[index]);
    playSong();
});

nextBtn.addEventListener('click',nextSong);

function nextSong() {
    index++;
    if(index > songs.length - 1) {
        index = 0;
    }
    loadSongs(songs[index]);
    playSong();
}


function playSong() {
    music_container.classList.add('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    music_container.classList.remove('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');
    playBtn.querySelector('i.fa-solid').classList.add('fa-play');
    audio.pause();
}

audio.addEventListener('timeupdate',updateProgress);

function updateProgress(e) {
    const {duration,currentTime} = e.srcElement;
    const progressPercent = (currentTime/duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

progress_container.addEventListener('click',setProgress);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX/width) * duration;
}

audio.addEventListener('ended',nextSong);