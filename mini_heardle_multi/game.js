// game.js

// Ensure DOM is ready before running game logic
document.addEventListener("DOMContentLoaded", () => {
let songs = [
  {
    file: "the bell.mp3",
    answers: ["the bell"]
  },
  {
    file: "dopamine.mp3",
    answers: ["dopamine"]
  }
];

let currentIndex = 0;
let currentSong = songs[currentIndex];
let audio = new Audio(currentSong.file);
let clipDurations = [1, 2, 4, 7];
let currentClip = 0;
let isPlaying = false;
let isFirstLoad = true;

const playBtn = document.getElementById("play-btn");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");
const guessInput = document.getElementById("guess");

// Create and insert skip button
const skipBtn = document.createElement("button");
skipBtn.id = "skip-btn";
skipBtn.textContent = "⏭️ Skip (Reveal More)";
skipBtn.style.marginLeft = "10px";
submitBtn.parentNode.insertBefore(skipBtn, feedback);

// Create and insert volume slider container
const volumeContainer = document.createElement("div");
volumeContainer.style.marginTop = "20px";
volumeContainer.style.display = "flex";
volumeContainer.style.flexDirection = "column";
volumeContainer.style.alignItems = "center";

const volumeLabel = document.createElement("label");
volumeLabel.textContent = "🔉 Volume";
volumeLabel.style.color = "#bae1ff";
volumeLabel.style.marginBottom = "5px";

const volumeSlider = document.createElement("input");
volumeSlider.type = "range";
volumeSlider.min = 0;
volumeSlider.max = 1;
volumeSlider.step = 0.01;
volumeSlider.value = 1;
volumeSlider.style.width = "150px";

volumeContainer.appendChild(volumeLabel);
volumeContainer.appendChild(volumeSlider);
document.body.insertBefore(volumeContainer, feedback);

// Create and insert song progress meter
const progressMeter = document.createElement("progress");
progressMeter.id = "preview-meter";
progressMeter.max = 1;
progressMeter.value = 0;
progressMeter.style.width = "150px";
progressMeter.style.marginTop = "10px";
volumeContainer.appendChild(progressMeter);

// Create and insert history log container
const historyLog = document.createElement("div");
historyLog.id = "history-log";
historyLog.innerHTML = "<h2>🎶 Guessed Songs</h2><ul id='history-list'></ul>";
document.body.appendChild(historyLog);

// Create and insert progress tracker
const progress = document.createElement("div");
progress.id = "progress";
progress.style.marginTop = "20px";
progress.style.fontSize = "1rem";
document.body.insertBefore(progress, historyLog);

// Load chime sound effect
const chime = new Audio("chime.mp3");

function setVolume(vol) {
  audio.volume = vol;
  chime.volume = vol;
}

volumeSlider.addEventListener("input", () => {
  setVolume(parseFloat(volumeSlider.value));
});

// Inject style for dark cute theme with professional font
const style = document.createElement('style');
style.innerHTML = `
  body {
    background-color: #1a1a2e;
    color: #fceaff;
    font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
    text-align: center;
    padding: 40px;
  }
  h1 {
    color: #ffb6f9;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  h2 {
    color: #bae1ff;
    font-size: 1.5rem;
    margin-top: 40px;
  }
  input, button {
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 10px;
    border: none;
    margin: 10px;
  }
  button {
    background: linear-gradient(145deg, #ffb6f9, #baffc9, #bae1ff);
    color: #222;
    cursor: pointer;
    transition: transform 0.2s;
  }
  button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px #fff3;
  }
  #feedback {
    font-size: 1.2rem;
    margin-top: 20px;
    min-height: 2em;
  }
  #history-log {
    margin-top: 50px;
    text-align: left;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 20px;
  }
  #history-list {
    list-style: none;
    padding: 0;
  }
  #history-list li {
    padding: 5px 0;
    color: #baffc9;
    font-size: 1rem;
    border-bottom: 1px solid #444;
  }
  body::after {
    content: "✨💖✨";
    font-size: 3rem;
    position: fixed;
    bottom: 10px;
    right: 20px;
    animation: sparkle 1.5s infinite alternate;
  }
  @keyframes sparkle {
    0% { opacity: 0.5; transform: rotate(0deg); }
    100% { opacity: 1; transform: rotate(10deg); }
  }
`;
document.head.appendChild(style);

function updateProgress() {
  progress.textContent = `Progress: ${currentIndex + 1} / ${songs.length}`;
}

function showTransitionMessage() {
  const transitionMsg = document.createElement("div");
  transitionMsg.textContent = "🎵 New Song!";
  transitionMsg.style.position = "fixed";
  transitionMsg.style.top = "50%";
  transitionMsg.style.left = "50%";
  transitionMsg.style.transform = "translate(-50%, -50%)";
  transitionMsg.style.fontSize = "2rem";
  transitionMsg.style.color = "#ffb6f9";
  transitionMsg.style.background = "rgba(0,0,0,0.8)";
  transitionMsg.style.padding = "15px 30px";
  transitionMsg.style.borderRadius = "15px";
  transitionMsg.style.zIndex = "999";
  transitionMsg.style.boxShadow = "0 0 10px #ffb6f9";
  transitionMsg.style.opacity = "0";
  transitionMsg.style.transition = "opacity 0.3s ease";
  document.body.appendChild(transitionMsg);

  requestAnimationFrame(() => {
    transitionMsg.style.opacity = "1";
    setTimeout(() => {
      transitionMsg.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(transitionMsg);
      }, 500);
    }, 1500);
  });
}

function loadSong(index) {
  currentSong = songs[index];
  audio = new Audio(currentSong.file);
  setVolume(parseFloat(volumeSlider.value));
  currentClip = 0;
  isPlaying = false;
  playBtn.disabled = false;
  submitBtn.disabled = false;
  skipBtn.disabled = false;
  feedback.textContent = "";
  guessInput.value = "";
  updateProgress();

  audio.ontimeupdate = () => {
    progressMeter.value = audio.currentTime / (clipDurations[currentClip] || 1);
  };
  audio.onended = () => {
    progressMeter.value = 0;
    isPlaying = false;
  };

  if (!isFirstLoad) {
    chime.play();
    showTransitionMessage();
  }
  isFirstLoad = false;
}

function addToHistory(songName) {
  const list = document.getElementById("history-list");
  const item = document.createElement("li");
  item.textContent = songName;
  list.appendChild(item);
}

playBtn.addEventListener("click", () => {
  if (isPlaying || currentClip >= clipDurations.length) return;
  isPlaying = true;
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    audio.pause();
    isPlaying = false;
  }, clipDurations[currentClip] * 1000);
});

submitBtn.addEventListener("click", submitGuess);

guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitGuess();
  }
});

function submitGuess() {
  let guess = guessInput.value.trim().toLowerCase();
  let match = currentSong.answers.some(answer => guess.includes(answer));

  if (match) {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    feedback.textContent = "✅ Correct! Moving to next song...";
    playBtn.disabled = true;
    submitBtn.disabled = true;
    skipBtn.disabled = true;
    addToHistory(currentSong.answers[0]);
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % songs.length;
      loadSong(currentIndex);
    }, 2000);
  } else {
    feedback.textContent = "❌ Incorrect. Try again!";
    currentClip++;
    if (currentClip >= clipDurations.length) {
      audio.pause();
      audio.currentTime = 0;
      isPlaying = false;
      feedback.textContent = `❌ Out of tries! The song was: \"${currentSong.answers[0]}\".`;
      playBtn.disabled = true;
      submitBtn.disabled = true;
      skipBtn.disabled = true;
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % songs.length;
        loadSong(currentIndex);
      }, 3000);
    }
  }
}

skipBtn.addEventListener("click", () => {
  if (currentClip < clipDurations.length - 1) {
    currentClip++;
    feedback.textContent = `🔊 Skipped! You can now hear up to ${clipDurations[currentClip]} seconds.`;
  } else {
    feedback.textContent = "⏭️ You've already reached the max length!";
  }
});

// Load the first song
loadSong(currentIndex);
});
