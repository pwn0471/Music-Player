let progres = document.getElementById("progres");
let song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");

let currTime = document.getElementById("currTime");
let duration = document.getElementById("duration");

let playlist = [
    {
        title:"Ghera Hua",
        artist:"By Arijit Singh and Armaan Khan",
        src:"media/Gehra-Hua-by-Irshad-Kamil(PagalWorldi.com.co).mp3",
        img:"media/ghrahua.jpg"
    },
    {
        title:"Ez-Ez",
        artist:" By Diljit Dosanjh and Hanumankind",
        src:"media/Ez-Ez (PenduJatt.Com.Se).mp3",
        img:"media/download (2).jpg"
    },
    {
        title:"Dhurandhar Arabic",
        artist:"By Hanumankind, Jasmine Sandlas, Sudhir Yaduvanshi, Muhammad Sadiq, and Ranjit Kaur",
        src:"media/Dhurandhar Arabic (PenduJatt.Com.Se).mp3",
        img:"media/download (2).jpg"
    },
    {
        title:"Shararat",
        artist:"By Madhubanti Bagchi and Jasmine Sandlas",
        src:"media/Shararat (PenduJatt.Com.Se).mp3",
        img:"media/download.jpg"
    },
    {
        title:"Ishq Jalakar - Karvaan",
        artist:"By Shahzad Ali, Subhadeep Das Chowdhury, and Armaan Khan",
        src:"media/Ishq Jalakar - Karvaan (PenduJatt.Com.Se).mp3",
        img:"media/download (3).jpg"
    }
];



let songIndex = 0;

function loadSong(index){
    song.src = playlist[index].src;

    document.querySelector("h1").textContent = playlist[index].title;
    document.querySelector("p").textContent = playlist[index].artist;
    document.querySelector(".song-img").src = playlist[index].img;
    song.load();

}

loadSong(songIndex);

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.onclick = function () {
  songIndex++;
  if (songIndex >= playlist.length) {
    songIndex = 0;
  }
  loadSong(songIndex);
  song.play();
  ctrlicon.classList.add("fa-pause");
  ctrlicon.classList.remove("fa-play");
};

prevBtn.onclick = function () {
  songIndex--;
  if (songIndex < 0) {
    songIndex = playlist.length - 1;
  }
  loadSong(songIndex);
  song.play();
  ctrlicon.classList.add("fa-pause");
  ctrlicon.classList.remove("fa-play");
};


song.addEventListener("ended", function () {
  songIndex++;
  if (songIndex >= playlist.length) {
    songIndex = 0;
  }
  loadSong(songIndex);
  //song.play();
});



song.onloadedmetadata = function(){
    progres.max = song.duration;
    progres.value = 0;
    duration.textContent = formatTime(song.duration);

}

song.addEventListener("timeupdate", function(){
    progres.value = song.currentTime;
    currTime.textContent = formatTime(song.currentTime);
})

ctrlicon.onclick=playPause;

function playPause(){
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause(); 
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play")

    }
} 

// if(song.play()){
//     setInterval(()=>{
//         progres.value = song.currentTime;
//     },500);
// }

progres.oninput = function(){
    
    // song.play();
    // song.currentTime = progres.value;
    // ctrlicon.classList.add("fa-pause");
    // ctrlicon.classList.remove("fa-play");     


        song.currentTime = progres.value;
        currTime.textContent = formatTime(song.currentTime);
    
}

function formatTime(time){
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if(seconds <10){
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}





