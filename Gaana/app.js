// intialising vars
let songindex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let mainele = songItemPlay[0];
let icons = document.querySelector(".icons");
let currentSongName = document.getElementById("currentsongname");
let Playlist = [
  {
    songName: "akhiyan-udeek-diyan",
    filepath: "songs/1.mp3",
    coverpath: "covers/akhiyan-udeek-diyan.jpg",
  },
  {
    songName: "O-Yaara-Dil-Lagana-Sanak",
    filepath: "songs/2.mp3",
    coverpath: "covers/O-Yaara-Dil-Lagana-Sanak.jpg",
  },
  {
    songName: "Tera-Naam",
    filepath: "songs/3.mp3",
    coverpath: "covers/Tera-Naam.jpg",
  },
  {
    songName: "akhiyan-udeek-diyan",
    filepath: "songs/1.mp3",
    coverpath: "covers/akhiyan-udeek-diyan.jpg",
  },
  {
    songName: "O-Yaara-Dil-Lagana-Sanak",
    filepath: "songs/2.mp3",
    coverpath: "covers/O-Yaara-Dil-Lagana-Sanak.jpg",
  },
  {
    songName: "Tera-Naam",
    filepath: "songs/3.mp3",
    coverpath: "covers/Tera-Naam.jpg",
  },
  {
    songName: "O-Yaara-Dil-Lagana-Sanak",
    filepath: "songs/2.mp3",
    coverpath: "covers/O-Yaara-Dil-Lagana-Sanak.jpg",
  },
  {
    songName: "Tera-Naam",
    filepath: "songs/3.mp3",
    coverpath: "covers/Tera-Naam.jpg",
  },
];
let progress;
let songIdx = 0;
currentSongName.innerHTML = "akhiyan-udeek-diyan";
//setting name and cover images

songItem.forEach((element, i) => {
  document.getElementsByTagName("img")[i + 1].src = Playlist[i].coverpath; //array of all the images
  document.getElementsByClassName("songName")[i].innerHTML =
    Playlist[i].songName;
});
//playing audio  // audioElement.play();
//handling play/pause
masterPlay.addEventListener("click", () => func());
// Listening to Events

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressBar.value = progress;
  if (progress == 100) {
    audioElement.pause();
    pausebuttons(mainele);
    masterPlay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;

    masterPlay.classList.add("fa-play-circle");
    progressBar.value = 0;
    audioElement.currentTime = 0;
  }
});

//changing audio with progressbar
progressBar.addEventListener("change", () => {
  // console.log("changing");
  audioElement.currentTime = parseInt(
    (progressBar.value * audioElement.duration) / 100
  );
});

function func() {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    console.log("called");
    audioElement.play();
    playinbuttons(mainele);
    gif.style.opacity = 1;
    // icons.style.opacity = 1;
  } else {
    audioElement.pause();
    pausebuttons(mainele);
    gif.style.opacity = 0;
  }
}
const makeallPlays = () => {
  songItemPlay.forEach((element) => {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  });
};
const playinbuttons = (element) => {
  element.classList.remove("fa-play-circle");

  element.classList.add("fa-pause-circle");
  masterPlay.classList.remove("fa-play-circle");

  masterPlay.classList.add("fa-pause-circle");
};
const pausebuttons = (element) => {
  element.classList.add("fa-play-circle");

  element.classList.remove("fa-pause-circle");
  masterPlay.classList.add("fa-play-circle");

  masterPlay.classList.remove("fa-pause-circle");
};
songItemPlay.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    makeallPlays(); //all paused except e
    songindex = i;
    if (element === mainele) {
      if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playinbuttons(element);
        return;
      } else {
        audioElement.pause();
        pausebuttons(element);
        return;
      }
    }
    mainele = element;

    let newsongName = document.getElementsByClassName("songName")[i].innerHTML;

    if (newsongName === "akhiyan-udeek-diyan") {
      audioElement.src = "songs/1.mp3";
      audioElement.currentTime = 0;
      currentSongName.innerHTML = newsongName;
      func();
    } else if (newsongName === "O-Yaara-Dil-Lagana-Sanak") {
      audioElement.src = "songs/2.mp3";
      audioElement.currentTime = 0;
      currentSongName.innerHTML = newsongName.substr(0, 15);
      func();
    } else {
      audioElement.src = "songs/3.mp3";
      audioElement.currentTime = 0;
      currentSongName.innerHTML = newsongName;
      func();
    }
  });
});

/*
  I may use ...
  songItemPlay.forEach((element, i) => {
  element.addEventListener("click", () => {
    // console.log(element);
    audioElement.paused = 1;
    progressBar.value = 0;
    let newsongName = document.getElementsByClassName("songName")[i].innerHTML;

    if (newsongName === "akhiyan-udeek-diyan") {
      audioElement = new Audio("songs/1.mp3");
      audioElement.play();
    } else if (newsongName === "O-Yaara-Dil-Lagana-Sanak") {
      audioElement = new Audio("songs/2.mp3");
      audioElement.play();
    } else {
      audioElement = new Audio("songs/3.mp3");
      audioElement.play();
      // func();
    }
  });
});
console.log("ele : ", element);
    console.log("value : ", element.value);
    if (element.value === "fa-pause-circle") {
      e.target.classList.remove("fa-pause-circle");

      e.target.classList.add("fa-play-circle");
      audioElement.pause();
      return;
    }
*/
