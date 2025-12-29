let progres = document.getElementById("progres");
let song = document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");

let currTime = document.getElementById("currTime");
let duration = document.getElementById("duration");


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

if(song.play()){
    setInterval(()=>{
        progres.value = song.currentTime;
    },500);
}

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