const lullaby = {
  name: 'Forest Lullaby', 
  artist: 'Lesfm',
  image: './src/cover-2.png',
  track: './src/forest-lullaby-110624.mp3',
  length: 138
}

const lost = {
  name: 'Lost in the City Lights',
  artist: 'Cosmo Sheldrake',
  image: './src/cover-1.png',
  track: './src/lost-in-city-lights-145038.mp3',
  length: 72
}

document.addEventListener('DOMContentLoaded', () => {
  let song = lost
  let audio = new Audio(song.track)
  let playing = false
  let updating = false
  let progress = 0
  let intervalId

  const convertSecondsToMinutes = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  }

  const changeSong = () => {
    clearInterval(intervalId)
    audio.pause()
    progress = 0
    if (song == lullaby){
      song = lost
    }
    else {
      song = lullaby
    }
    info.children[0].innerHTML = song.name
    info.children[1].innerHTML = song.artist
    image.src = song.image
    songDuration.innerText = convertSecondsToMinutes(song.length)
    playedTime.textContent = '00:00'
    progressBar.style.width = 0
    audio = new Audio(song.track)
    audio.play()
    playPause.children[0].src = './src/pause_icon.svg'
    playing = true
    updateTimer(song.length)
  }

  const togglePause = () => {
    if (playing){
      audio.pause()
      playPause.children[0].src = './src/Play_fill.svg'
      playing = !playing
      updating = false
    }
    else {
      audio.play()
      playPause.children[0].src = './src/pause_icon.svg'
      playing = !playing
    }
  }

  const updateTimer = (duration) => {
    console.log('i am updating')
    updating = true
    if (playing) {
      intervalId = setInterval(() => {
      progress++
      playedTime.textContent = convertSecondsToMinutes(progress)
      updateProgressBar(progress, duration)
        if (progress === Math.round(duration)) {
          clearInterval(intervalId)
          playedTime.textContent = '00:00'
          changeSong()
          }}, 1000)
        } else {
          clearInterval(intervalId)
        }
    }

    const updateProgressBar = (progress, duration) => {
    const current = Math.round((progress / Math.round(duration)) * 100)
    progressBar.style.width = `${current}%`
  }

  const previous = document.getElementById('previous')
  const next = document.getElementById('next')
  const playPause = document.getElementById('play-pause')

  const info = document.getElementById('info-container')
  const image = document.getElementById('img')

  const progressBar = document.getElementById('progress')
  const fullBar = document.getElementById('bar')

  const songDuration = document.getElementById('right-ts')
  const playedTime = document.getElementById('left-ts')

  // fullBar.addEventListener("click", (e) => {  /////to make this work I'd have to change HTML to use an audio tag, feeling lazy
  //   console.log('clicked')
  //   const progressPercentage = e.offsetX / progress.clientWidth;
  //   const duration = song.length;
  //   const seekTime = duration * progressPercentage;
  //   audio.fastSeek(seekTime)
  //   progress = Math.ceil(seekTime);
  //   playedTime.textContent = convertSecondsToMinutes(Math.ceil(seekTime));
  //   progressBar.style.width = `${progressPercentage * 100}%`;
  //   clearInterval(intervalId);
  // });

  previous.addEventListener('click', changeSong)
  next.addEventListener('click', changeSong)
  playPause.addEventListener('click', togglePause) 
  audio.addEventListener('play', () => updateTimer(song.length))
  audio.addEventListener('pause', () => clearInterval(intervalId))
})