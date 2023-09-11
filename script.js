console.log("welcome to spotify!!");
//Initializing the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogessbar = document.getElementById('myprogress');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songitems = Array.from(document.getElementsByClassName('songitems'));

let songs = [//array of objects
    { songname: "Dil Mangda", filepath: "songs/1.mp3", coverpath: "cover/cover1.jpg" },
    { songname: " G-gill", filepath: "songs/2.mp3", coverpath: "cover/cover2.jpg" },
    { songname: "Kahani suno 2.0", filepath: "songs/3.mp3", coverpath: "cover/cover3.jpg" },
    { songname: " Maan Meri Jaan", filepath: "songs/4.mp3", coverpath: "cover/cover4.jpg" },
    { songname: "Manike", filepath: "songs/5.mp3", coverpath: "cover/cover5.jpg" },
    { songname: "Raatan Lambiyaan", filepath: "songs/6.mp3", coverpath: "cover/cover6.jpg" },
    { songname: " Tere Hawaale", filepath: "songs/7.mp3", coverpath: "cover/cover7.jpg" },
    { songname: " What Jhumka", filepath: "songs/8.mp3", coverpath: "cover/cover8.jpg" },
    

]
songitems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
});
//Handle play and pause click
masterplay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listening to events
audioElement.addEventListener('timeupdate', ()=>{

    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogessbar.value = progress;

})
myprogessbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogessbar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})