// game.js

// Ensure DOM is ready before running game logic
document.addEventListener("DOMContentLoaded", () => {
let songs = [

  {
    file: "06. Mine.mp3",
    answers: ["mine"]
  },
  {
    file: "0g.mp3",
    answers: ["0g"]
  },
  {
    file: "247 (247).mp3",
    answers: ["247"]
  },
  {
    file: "aespa 'Dreams Come True' Lyrics (에스파 Dreams Come True 가사) (Color Coded Lyrics).mp3",
    answers: ["dreams come true"]
  },
  {
    file: "aespa Savage Lyrics (에스파 Savage 가사) (Color Coded Lyrics).mp3",
    answers: ["savage"]
  },
  {
    file: "aespa 에스파 'Life's Too Short (English Ver.)' Lyric Video.mp3",
    answers: ["life's too short", "lifes too short"]
  },
  {
    file: "Annie.mp3",
    answers: ["annie"]
  },
  {
    file: "BBY GOYARD - Dreamweaver (prod. Taylor Morgan).mp3",
    answers: ["dreamweaver", "dream weaver"]
  },
  {
    file: "BBY GOYARD - Rob Dyrdek $$$ (Official Video).mp3",
    answers: ["rob dyrdek"]
  },
  {
    file: "BBY GOYARD - Vamp Fangs [Dir. by @DotComNirvan].mp3",
    answers: ["vamp fangs"]
  },
  {
    file: "Beam.mp3",
    answers: ["beam"]
  },
  {
    file: "Bryn (브린) - 'YANKEE' - YANKEE (feat.Tommy Strate)(prod.by Santa Paine).mp3",
    answers: ["yankee"]
  },
  {
    file: "C-REAL(씨리얼) _ No No No No No MV.mp3",
    answers: ["no no no no no", "no"]
  },
  {
    file: "Chowall.mp3",
    answers: ["chowall"]
  },
  {
    file: "Claire Yotts - Self Made (Official Audio).mp3",
    answers: ["self made"]
  },
  {
    file: "CLASSy Psycho and Beautiful Lyrics (Color Coded Lyrics).mp3",
    answers: ["psycho and beautiful", "p and beautiful"]
  },
  {
    file: "Colorful.mp3",
    answers: ["colorful"]
  },
  {
    file: "COMPLEX (COMPLEX).mp3",
    answers: ["complex"]
  },
  {
    file: "Cupid.mp3",
    answers: ["cupid"]
  },
  {
    file: "Destroy Lonely - NEVEREVER (Official Audio).mp3",
    answers: ["neverever", "never ever"]
  },
  {
    file: "Destroy Lonely - NOSTYLIST (Official Audio).mp3",
    answers: ["nostylist", "no stylist"]
  },
  {
    file: "Doublë.mp3",
    answers: ["double"]
  },
  {
    file: "DRAMA BABY ⧸ MALIBU.mp3",
    answers: ["drama baby", "malibu"]
  },
  {
    file: "Effie - Satellite (Official Visualizer).mp3",
    answers: ["satellite"]
  },
  {
    file: "Favorite Part.mp3",
    answers: ["favorite part", "favourite part"]
  },
  {
    file: "Flash Forward.mp3",
    answers: ["flash forward"]
  },
  {
    file: "Fragments.mp3",
    answers: ["fragments"]
  },
  {
    file: "fromis_9 (프로미스나인) 'DM' Official MV.mp3",
    answers: ["dm"]
  },
  {
    file: "fromis_9 (프로미스나인) 'Escape Room' Performance Video.mp3",
    answers: ["escape room"]
  },
  {
    file: "fromis_9 (프로미스나인) 'Stay This Way' Performance Video.mp3",
    answers: ["stay this way"]
  },
  {
    file: "fromis_9 (프로미스나인) 'Talk & Talk' Performance Video.mp3",
    answers: ["talk & talk", "talk and talk"]
  },
  {
    file: "Good Parts (when the quality is bad but I am).mp3",
    answers: ["good parts"]
  },
  {
    file: "Gët Busy [Official Music Video].mp3",
    answers: ["get busy"]
  },
  {
    file: "How it go [Official Audio].mp3",
    answers: ["how it go"]
  },
  {
    file: "Hush Hush.mp3",
    answers: ["hush hush", "hush"]
  },
  {
    file: "I LIKE IT (I LIKE IT).mp3",
    answers: ["i like it"]
  },
  {
    file: "Internet Money - No Handoutz feat. Yeat (Official Lyric Video).mp3",
    answers: ["no handoutz", "no handouts"]
  },
  {
    file: "IVE Cherish Lyrics (Color Coded Lyrics).mp3",
    answers: ["cherish"]
  },
  {
    file: "IVE Lips Lyrics (아이브 Lips 가사) (Color Coded Lyrics).mp3",
    answers: ["lips"]
  },
  {
    file: "IVE 아이브 'I AM' MV.mp3",
    answers: ["i am"]
  },
  {
    file: "JO YURI (조유리) - GLASSY「Audio」.mp3",
    answers: ["glassy"]
  },
  {
    file: "Jo Yuri Blank Lyrics (조유리 Blank 가사) (Color Coded Lyrics).mp3",
    answers: ["blank"]
  },
  {
    file: "Jo Yuri Loveable Lyrics (조유리 Loveable 가사) (Color Coded Lyrics).mp3",
    answers: ["loveable"]
  },
  {
    file: "LE SSERAFIM (르세라핌) ‘ANTIFRAGILE’ Special Performance Video.mp3",
    answers: ["antifragile", "anti fragile"]
  },
  {
    file: "Let's All Love Lain.mp3",
    answers: ["let's all love lain", "lets all love lain"]
  },
  {
    file: "Lying 4 fun.mp3",
    answers: ["lying 4 fun", "lying for fun"]
  },
  {
    file: "Misery ᐸ3 Company.mp3",
    answers: ["misery loves company", "misery"]
  },
  {
    file: "Nettspend - Beach Leak (Official Audio).mp3",
    answers: ["beach leak"]
  },
  {
    file: "Nettspend - Fuck Swag (OG Music Video).mp3",
    answers: ["fuck swag"]
  },
  {
    file: "Nettspend - We Not Like You [Dir. by Tycho].mp3",
    answers: ["we not like you"]
  },
  {
    file: "New World.mp3",
    answers: ["new world"]
  },
  {
    file: "NewJeans (뉴진스) 'Cookie' Official MV.mp3",
    answers: ["cookie"]
  },
  {
    file: "NewJeans (뉴진스) 'Ditto' Performance Video.mp3",
    answers: ["ditto"]
  },
  {
    file: "NewJeans (뉴진스) 'Hurt' Official MV.mp3",
    answers: ["hurt"]
  },
  {
    file: "NewJeans (뉴진스) 'Hype Boy' Official MV (Performance ver.1).mp3",
    answers: ["hype boy"]
  },
  {
    file: "NewJeans (뉴진스) 'OMG' Official MV (Performance ver.1).mp3",
    answers: ["omg"]
  },
  {
    file: "NewJeans Attention Lyrics (뉴진스 Attention 가사) (Color Coded Lyrics).mp3",
    answers: ["attention"]
  },
  {
    file: "Night Drive.mp3",
    answers: ["night drive"]
  },
  {
    file: "NMIXX 'O.O' Lyrics (엔믹스 O.O 가사) (Color Coded Lyrics).mp3",
    answers: ["o.o", "oo"]
  },
  {
    file: "NMIXX - COOL (Your rainbow) ｜ SPECIAL VIDEO.mp3",
    answers: ["cool", "cool your rainbow"]
  },
  {
    file: "NMIXX DICE Lyrics (엔믹스 DICE 가사) (Color Coded Lyrics).mp3",
    answers: ["dice"]
  },
  {
    file: "Nothing quite like that Spectral cares.mp3",
    answers: ["nothing quite like that spectral cares"]
  },
  {
    file: "On tha linë.mp3",
    answers: ["on tha line"]
  },
  {
    file: "Out thë way [Official Audio].mp3",
    answers: ["out the way"]
  },
  {
    file: "Poppin.mp3",
    answers: ["poppin"]
  },
  {
    file: "Purity Ring - Fineshrine (4AD).mp3",
    answers: ["fineshrine"]
  },
  {
    file: "purity ring - neverend (official lyric video).mp3",
    answers: ["neverend"]
  },
  {
    file: "Shannon's Ladder.mp3",
    answers: ["shannon's ladder", "shannons ladder"]
  },
  {
    file: "SoFaygo - Off the Map (Official Audio).mp3",
    answers: ["off the map"]
  },
  {
    file: "Sour Grapes.mp3",
    answers: ["sour grapes"]
  },
  {
    file: "STAYC (스테이씨) - 'LOVE' Lyrics [Color Coded_Han_Rom_Eng].mp3",
    answers: ["love"]
  },
  {
    file: "STAYC (스테이씨) - YOUNG LUV 「Audio」.mp3",
    answers: ["young luv", "young love"]
  },
  {
    file: "STAYC 스테이씨   I'LL BE THERE   Lyrics (ColorCoded ENG HAN ROM 가사).mp3",
    answers: ["i'll be there", "ill be there"]
  },
  {
    file: "STAYC(스테이씨) 'BEAUTIFUL MONSTER' MV.mp3",
    answers: ["beautiful monster"]
  },
  {
    file: "STAYC(스테이씨) 'RUN2U' MV.mp3",
    answers: ["run2u"]
  },
  {
    file: "STAYC(스테이씨) '색안경 (STEREOTYPE)' MV.mp3",
    answers: ["stereotype"]
  },
  {
    file: "Strangewrld.mp3",
    answers: ["strangewrld", "strangeworld", "strange world"]
  },
  {
    file: "Systëm [Official Audio].mp3",
    answers: ["system"]
  },
  {
    file: "TANK.mp3",
    answers: ["tank"]
  },
  {
    file: "TH13TEEN GHOSTS.mp3",
    answers: ["th13teen ghosts", "13 ghosts", "thirteen ghosts"]
  },
  {
    file: "The Ugly Truth, Pt. 1.mp3",
    answers: ["the ugly truth, pt. 1", "the ugly truth"]
  },
  {
    file: "Told ya.mp3",
    answers: ["told ya"]
  },
  {
    file: "Vierre Cloud - moment (Official Audio).mp3",
    answers: ["moment"]
  },
  {
    file: "YEAT - ＂Tonka 2＂ OFFICIAL VERSION.mp3",
    answers: ["tonka 2"]
  },
  {
    file: "[CORRECT] LE SSERAFIM (르세라핌) - 'Impurities' Lyrics [Color Coded_Han_Rom_Eng].mp3",
    answers: ["impurities"]
  },
  {
    file: "[MV] tripleS(트리플에스) _ Generation (Dance Ver.).mp3",
    answers: ["generation"]
  },
  {
    file: "ЗАБВЕНИЕ.mp3",
    answers: ["забвение", "zabviene", "zabvenie"]
  },
  {
    file: "달아 Moon.mp3",
    answers: ["moon"]
  },
  {
    file: "the bell.mp3",
    answers: ["the bell"]
  },
  {
    file: "dopamine.mp3",
    answers: ["dopamine"]
  },
  {
  file: "05. IVE - OTT.mp3",
  answers: ["OTT"]
  },
  {
    file: "aespa 에스파 'Better Things' Performance Video.mp3",
    answers: ["better things"]
  },
  {
    file: "Supernova - aespa (Audio).mp3",
    answers: ["SUPERNOVA"]
  },
  {
    file: "AGIRLISAGUN.mp3",
    answers: ["AGIRLISAGUN", "a girl is a gun"]
  },
  {
    file: "ARTMS ‘Pre2 ： Flower Rhythm' Official Track Video.mp3",
    answers: ["FLOWER RHYTHM"]
  },
  {
    file: "ARTMS ‘Pre4 ： Air' Official Track Video.mp3",
    answers: ["AIR"]
  },
  {
    file: "ARTMS (아르테미스) 'Virtual Angel' Official Audio.mp3",
    answers: ["VIRTUAL ANGEL"]
  },
  {
    file: "Asian Rock.mp3",
    answers: ["asian rock"]
  },
  {
    file: "Run Shannon Run.mp3",
    answers: ["RUN SHANNON RUN"]
  },
  {
    file: "BBY GOYARD - VERY VALID prod.Fluxury (directed by Ryan Tempke).mp3",
    answers: ["VERY VALID"]
  },
  {
    file: "Be Mine (Be Mine).mp3",
    answers: ["BE MINE"]
  },
  {
    file: "BYOB (bring your own best friend) (BYOB (bring your own best friend)).mp3",
    answers: ["BRING YOUR OWN BEST FRIEND", "BYOB"]
  },
  {
    file: "Black Soul Dress.mp3",
    answers: ["black soul dress", "black dress"]
  },
  {
    file: "Breathe In, Breathe Out.mp3",
    answers: ["breathe in breathe out", "breathe in"]
  },
  {
    file: "CHUU 츄 'Strawberry Rush' Performance Video.mp3",
    answers: ["STRAWBERRY RUSH"]
  },
  {
    file: "DAMN.mp3",
    answers: ["damn"]
  },
  {
    file: "Deja-Vu.mp3",
    answers: ["deja-vu", "dejavu", "deja vu"]
  },
  {
    file: "Dimension (KRE Ver.).mp3",
    answers: ["dimension", "dimensions"]
  },
  {
    file: "Effie - 미워미워 (Official Music Video).mp3",
    answers: ["miwomiwo", "miwo", "미워미워"]
  },
  {
    file: "Empty.mp3",
    answers: ["empty"]
  },
  {
    file: "Fashion Trappin - Brennan Jones.mp3",
    answers: ["fashion trappin"]
  },
  {
    file: "Final Destination.mp3",
    answers: ["final destination"]
  },
  {
    file: "fromis_9 - menow [Audio].mp3",
    answers: ["menow", "me now"]
  },
  {
    file: "fromis_9 (프로미스나인) 'Supersonic' Official Audio.mp3",
    answers: ["supersonic"]
  },
  {
    file: "Frou Frou - A New Kind Of Love (Demo) feat. Imogen Heap & Guy Sigsworth [639hz].mp3",
    answers: ["a new kind of love"]
  },
  {
    file: "Get Up.mp3",
    answers: ["get up"]
  },
  {
    file: "Grade 9.mp3",
    answers: ["grade 9"]
  },
  {
    file: "GroovyRoom - Yes or No (Feat. 허윤진 of LE SSERAFIM, Crush) (Official Lyric Video).mp3",
    answers: ["yes or no"]
  },
  {
    file: "Hearts2Hearts 하츠투하츠 'The Chase' Performance Video.mp3",
    answers: ["THE CHASE"]
  },
  {
    file: "I Just Wanna Know.mp3",
    answers: ["i just wanna know"]
  },
  {
    file: "I Wanna Do (I Wanna Do).mp3",
    answers: ["i wanna do"]
  },
  {
    file: "Lucky Girl Syndrome (Audio).mp3",
    answers: ["lucky girl syndrome"]
  },
  {
    file: "ILLIT (아일릿) - Cherish (My Love) [Audio].mp3",
    answers: ["cherish", "CHERISH MY LOVE"]
  },
  {
    file: "ILLIT (아일릿) 'Magnetic' Official Audio.mp3",
    answers: ["magnetic"]
  },
  {
    file: "Imogen Heap - Headlock (Official Video).mp3",
    answers: ["headlock"]
  },
  {
    file: "Inception.mp3",
    answers: ["inception"]
  },
  {
    file: "ITZY 'FIVE' Lyrics (있지 FIVE 가사) [Color Coded Han_Rom_Eng] ｜ ShadowByYoongi.mp3",
    answers: ["FIVE"]
  },
  {
    file: "ITZY (イッチ) - 'Sugar-holic' Lyrics [Color Coded_Kan_Rom_Eng].mp3",
    answers: ["SUGAR HOLIC","sugarholic", ]
  },
  {
    file: "IVE 아이브 'Off The Record' MV.mp3",
    answers: ["OFF THE RECORD"]
  },
  {
    file: "izna 'TIMEBOMB' Lyrics (이즈나 TIMEBOMB 가사) [Color Coded Han_Rom_Eng]   ShadowByYoongi.mp3",
    answers: ["timebomb"]
  },
  {
    file: "I’ll Like You.mp3",
    answers: ["ILL LIKE YOU", "i’ll like you"]
  },
  {
    file: "Nobody Knows (Nobody Knows).mp3",
    answers: ["nobody knows"]
  },
  {
    file: "KISS OF LIFE Sticky Lyrics (Color Coded Lyrics).mp3",
    answers: ["sticky"]
  },
  {
    file: "KISS OF LIFE (키스오브라이프) 'Sugarcoat (NATTY Solo)' MV.mp3",
    answers: ["sugarcoat"]
  },
  {
    file: "LE SSERAFIM 'EASY' Lyrics (르세라핌 EASY 가사) (Color Coded Lyrics).mp3",
    answers: ["easy"]
  },
  {
    file: "LE SSERAFIM (르세라핌) 'Perfect Night' OFFICIAL M⧸V with OVERWATCH 2 (Choreography ver.).mp3",
    answers: ["perfect night"]
  },
  {
    file: "LE SSERAFIM (르세라핌) 'Smart (English ver.)' Official Visualizer.mp3",
    answers: ["smart"]
  },
  {
    file: "Midnight Fiction.mp3",
    answers: ["midnight fiction"]
  },
  {
    file: "My World.mp3",
    answers: ["my world"]
  },
  {
    file: "NewJeans 'New Jeans (ft. The Powerpuff Girls)' Lyrics (뉴진스 New Jeans 가사) (Color Coded Lyrics).mp3",
    answers: ["new jeans", "newjeans"]
  },
  {
    file: "NewJeans (뉴진스) 'ASAP' Official MV.mp3",
    answers: ["asap"]
  },
  {
    file: "NewJeans 'Bubble Gum' Lyrics (뉴진스 Bubble Gum 가사) (Color Coded Lyrics).mp3",
    answers: ["bubble gum"]
  },
  {
    file: "NewJeans (뉴진스) 'Cool With You' Official MV (Performance ver.).mp3",
    answers: ["cool with you"]
  },
  {
    file: "NewJeans 'ETA' Lyrics (뉴진스 ETA 가사) (Color Coded Lyrics).mp3",
    answers: ["eta"]
  },
  {
    file: "NewJeans 'How Sweet' Lyrics (뉴진스 How Sweet 가사) (Color Coded Lyrics).mp3",
    answers: ["how sweet"]
  },
  {
    file: "NewJeans (뉴진스) 'Right Now' Lyrics (Color Coded Lyrics).mp3",
    answers: ["right now"]
  },
  {
    file: "NewJeans 'Super Shy' Lyrics (뉴진스 Super Shy 가사) (Color Coded Lyrics).mp3",
    answers: ["super shy"]
  },
  {
    file: "NewJeans (뉴진스) ‘Supernatural’ Official MV (Part.1).mp3",
    answers: ["supernatural"]
  },
  {
    file: "NMIXX “Passionfruit” (Official Audio).mp3",
    answers: ["passionfruit"]
  },
  {
    file: "NMIXX Roller Coaster Lyrics (Color Coded Lyrics).mp3",
    answers: ["roller coaster"]
  },
  {
    file: "NMIXX (엔믹스) 'Know about me' (Color Coded Lyrics).mp3",
    answers: ["know about me"]
  },
  {
    file: "NMIXX(엔믹스) “Papillon” (Official Audio).mp3",
    answers: ["papillon"]
  },
  {
    file: "NMIXX 'See that' Lyrics (엔믹스 별별별 가사) (Color Coded Lyrics).mp3",
    answers: ["see that"]
  },
  {
    file: "ODD EYE CIRCLE Air Force One Lyrics (Color Coded Lyrics).mp3",
    answers: ["air force one"]
  },
  {
    file: "Oui.mp3",
    answers: ["oui"]
  },
  {
    file: "Pimple.mp3",
    answers: ["pimple"]
  },
  {
    file: "Pink Heartz.mp3",
    answers: ["pink heartz", "pinkheartz", "pink hearts", "pinkhearts"]
  },
  {
    file: "Real world.mp3",
    answers: ["real world"]
  },
  {
    file: "Roses (ISA) (Roses (ISA)).mp3",
    answers: ["roses"]
  },
  {
    file: "Round and Around.mp3",
    answers: ["round and around"]
  },
  {
    file: "Seoul Sonyo Sound.mp3",
    answers: ["seoul sonyo sound", "seoul sound"]
  },
  {
    file: "SHOOT (PINKHEARTZ 2 ZERO).mp3",
    answers: ["shoot"]
  },
  {
    file: "Sparkle.mp3",
    answers: ["sparkle"]
  },
  {
    file: "Speed Love.mp3",
    answers: ["speed love"]
  },
  {
    file: "STAYC GPT Lyrics (Color Coded Lyrics).mp3",
    answers: ["gpt"]
  },
  {
    file: "Strawberry soda.mp3",
    answers: ["strawberry soda"]
  },
  {
    file: "Tame Impala - New Person, Same Old Mistakes (Audio).mp3",
    answers: ["new person same old mistakes"]
  },
  {
    file: "tripleS EVOLution 37.5 Celsius Lyrics (Color Coded Lyrics).mp3",
    answers: ["37.5 celsius", "celsius"]
  },
  {
    file: "tripleS Glow (트리플에스) '내적 댄스 (Inner Dance)' Official Performance.mp3",
    answers: ["inner dance"]
  },
  {
    file: "복합성 (Complexity).mp3",
    answers: ["complexity"]
  },
  {
    file: "tripleS(트리플에스) 'Girls Never Die' Official MV.mp3",
    answers: ["girls never die"]
  },
  {
    file: "tripleS(트리플에스) EVOLution ‘Invincible’ MV.mp3",
    answers: ["invincible"]
  },
  {
    file: "tripleS(트리플에스) LOVElution ‘Girls' Capitalism’ Official Dance Ver..mp3",
    answers: ["girls capitalism"]
  },
  {
    file: "tripleS NXT(트리플에스) 'Just Do It' Official Lyric Video.mp3",
    answers: ["just do it"]
  },
  {
    file: "UNIS SUPERWOMAN Lyrics (Color Coded Lyrics).mp3",
    answers: ["superwoman"]
  },
  {
    file: "03. Whatchu Need (Official Audio).mp3",
    answers: ["whatchu need", "what u need", "what you need", "whatchuneed"]
  },
  {
    file: "UNIS Curious Lyrics (Color Coded Lyrics).mp3",
    answers: ["curious"]
  },
  {
    file: "UNIS(유니스) ‘Poppin’' Dance Practice (Moving ver.).mp3",
    answers: ["poppin", "popping"]
  },
  {
    file: "UNIS(유니스) 'Swicy' (Color Coded Lyrics).mp3",
    answers: ["swicy"]
  },
  {
    file: "bigger thën everything [Official Audio].mp3",
    answers: ["bigger then everything"]
  },
  {
    file: "YOUNG POSSE (영파씨) - Blue Dot Colour-coded lyrics.mp3",
    answers: ["blue dot"]
  },
  {
    file: "YUNGTARR - IPHONE (Directed by Tarr).mp3",
    answers: ["iphone"]
  },
  {
    file: "[MV] BIBI(비비) _ I AM SHAMPOO(안녕하세오 샴푸애요 (I AM...)).mp3",
    answers: ["i am shampoo"]
  },
];

// Shuffle the songs array to randomize order
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(songs);

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
volumeSlider.className = "volume-slider";
volumeSlider.type = "range";
volumeSlider.min = 0;
volumeSlider.max = 1;
volumeSlider.step = 0.01;
volumeSlider.value = 1;
// volumeSlider.style.width = "150px";

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
  let match = currentSong.answers.some(answer => guess === answer.toLowerCase());

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
