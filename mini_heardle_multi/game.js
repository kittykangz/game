// game.js
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

// Create and insert history log container
const historyLog = document.createElement("div");
historyLog.id = "history-log";
historyLog.innerHTML = "<h2>🎶 Guessed Songs</h2><ul id='history-list'></ul>";
document.body.appendChild(historyLog);

// Inject style for dark cute theme with professional font
const style = document.createElement('style');
style.innerHTML = `
  body {
    background: linear-gradient(135deg, #1a1a2e, #16213e);
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

function loadSong(index) {
  currentSong = songs[index];
  audio = new Audio(currentSong.file);
  currentClip = 0;
  isPlaying = false;
  playBtn.disabled = false;
  submitBtn.disabled = false;
  skipBtn.disabled = false;
  feedback.textContent = "";
  guessInput.value = "";
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
      feedback.textContent = `❌ Out of tries! The song was: "${currentSong.answers[0]}".`;
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
