  console.log("Game script loaded");

  document.addEventListener("DOMContentLoaded", () => {
    // Remove punctuation, symbols, and diacritics; lowercase for comparison
function normalize(str) {
  return str
    .toLowerCase()
    // Decompose accented letters (é → e + ́) and strip diacritics
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    // Remove anything that isn't a letter, number, or space
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}

    let songs = [
 
  {
    file: "Camila Cabello - HE KNOWS (ft. Lil Nas X)(Official Music Video).mp3",
	title: "HE KNOWS",
	artist: "Lil Nas X",
    answers: ["he knows"]
  },
  {
    file: "DESTIN CONRAD, Lil Nas X - P.B.S. (Official Visualizer).mp3",
	title: "P.B.S.",
	artist: "Lil Nas X",
    answers: ["pbs"]
  },
  {
    file: "HERE WE GO! (from the Netflix film Beverly Hills Cop Axel F - Official Audio).mp3",
	title: "HERE WE GO!",
	artist: "Lil Nas X",
    answers: ["here we go"]
  },
  {
    file: "Kevin Abstract - Tennessee ft. Lil Nas X (Official Audio).mp3",
	title: "Tennessee",
	artist: "Lil Nas X",
    answers: ["tennessee"]
  },
  {
    file: "light!.mp3",
	title: "light! skaiwater & 9lives",
	artist: "Lil Nas X",
    answers: ["light"]
  },
  {
    file: "Lil Nas X - AM I DREAMING ft. Miley Cyrus.mp3",
	title: "AM I DREAMING",
	artist: "Lil Nas X",
    answers: ["am i dreaming"]
  },
  {
    file: "Lil Nas X - BIG DUMMY! (Lyrics).mp3",
	title: "BIG DUMMY!",
	artist: "Lil Nas X",
    answers: ["big dummy"]
  },
  {
    file: "Lil Nas X - Bring U Down (Official Audio).mp3",
	title: "Bring U Down",
	artist: "Lil Nas X",
    answers: ["bring u down"]
  },
  {
    file: "Lil Nas X - C7osure (You Like) (Official Audio).mp3",
	title: "C7osure (You Like)",
	artist: "Lil Nas X",
    answers: ["c7osure"]
  },
  {
    file: "Lil Nas X - DEAD RIGHT NOW.mp3",
	title: "DEAD RIGHT NOW",
	artist: "Lil Nas X",
    answers: ["dead right now"]
  },
  {
    file: "Lil Nas X - DOLLA SIGN SLIME ft. Megan Thee Stallion.mp3",
	title: "DOLLA SIGN SLIME",
	artist: "Lil Nas X",
    answers: ["dolla sign slime"]
  },
  {
    file: "Lil Nas X - DONT WANT IT.mp3",
	title: "DONT WANT IT",
	artist: "Lil Nas X",
    answers: ["dont want it"]
  },
  {
    file: "Lil Nas X - DREAMBOY.mp3",
	title: "DREAMBOY",
	artist: "Lil Nas X",
    answers: ["dreamboy"]
  },
  {
    file: "HOLIDAY.mp3",
	title: "HOLIDAY",
	artist: "Lil Nas X",
    answers: ["holiday"]
  },
  {
    file: "Lil Nas X - HOTBOX (Official Video).mp3",
	title: "HOTBOX",
	artist: "Lil Nas X",
    answers: ["hotbox"]
  },
  {
    file: "Lil Nas X - J Christ (Lyrics).mp3",
	title: "J Christ",
	artist: "Lil Nas X",
    answers: ["j christ"]
  },
  {
    file: "Lil Nas X - Kick It (Official Audio).mp3",
	title: "Kick It",
	artist: "Lil Nas X",
    answers: ["kick it"]
  },
  {
    file: "Lil Nas X - LEAN ON MY BODY (Lyric Video).mp3",
	title: "LEAN ON MY BODY",
	artist: "Lil Nas X",
    answers: ["lean on my body"]
  },
  {
    file: "Lil Nas X - LIFE AFTER SALEM.mp3",
	title: "LIFE AFTER SALEM",
	artist: "Lil Nas X",
    answers: ["life after salem"]
  },
  {
    file: "Lil Nas X - LIGHT AGAIN!.mp3",
	title: "LIGHT AGAIN!",
	artist: "Lil Nas X",
    answers: ["light again!", "light again"]
  },
  {
    file: "Lil Nas X - LOST IN THE CITADEL.mp3",
	title: "LOST IN THE CITADEL",
	artist: "Lil Nas X",
    answers: ["lost in the citadel"]
  },
  {
    file: "Lil Nas X - MONTERO (Call Me By Your Name) (Lyrics).mp3",
	title: "MONTERO (Call Me By Your Name)",
	artist: "Lil Nas X",
    answers: ["montero"]
  },
  {
    file: "Lil Nas X - need dat boy (Official Visualizer).mp3",
	title: "need dat boy",
	artist: "Lil Nas X",
    answers: ["need dat boy"]
  },
  {
    file: "Lil Nas X - Old Town Road (Official Video) ft. Billy Ray Cyrus.mp3",
	title: "Old Town Road",
	artist: "Lil Nas X",
    answers: ["old town road"]
  },
  {
    file: "Lil Nas X - ONE OF ME ft. Elton John.mp3",
	title: "ONE OF ME",
	artist: "Lil Nas X",
    answers: ["one of me"]
  },
  {
    file: "Lil Nas X -  Panini (Lyrics).mp3",
	title: "Panini",
	artist: "Lil Nas X",
    answers: ["Panini"]
  },
  {
    file: "Lil Nas X - Right There (Lyric Video).mp3",
	title: "RIGHT THERE!",
	artist: "Lil Nas X",
    answers: ["right there"]
  },
  {
    file: "Lil Nas X - SCOOP ft. Doja Cat.mp3",
	title: "SCOOP",
	artist: "Lil Nas X",
    answers: ["lil nas x   scoop ft. doja cat"]
  },
  {
    file: "Lil Nas X - STAR WALKIN' (Lyrics).mp3",
	title: "STAR WALKIN'",
	artist: "Lil Nas X",
    answers: ["star walkin"]
  },
  {
    file: "Lil Nas X - SUN GOES DOWN (Lyrics).mp3",
	title: "SUN GOES DOWN",
	artist: "Lil Nas X",
    answers: ["sun goes down"]
  },
  {
    file: "Lil Nas X - SWISH.mp3",
	title: "SWISH",
	artist: "Lil Nas X",
    answers: ["SWISH"]
  },
  {
    file: "Lil Nas X - TALES OF DOMINICA.mp3",
	title: "TALES OF DOMINICA",
	artist: "Lil Nas X",
    answers: ["lil nas x   tales of dominica"]
  },
  {
    file: "Lil Nas X - THATS WHAT I WANT (Lyrics).mp3",
	title: "THATS WHAT I WANT",
	artist: "Lil Nas X",
    answers: ["THATS WHAT I WANT"]
  },
  {
    file: "Lil Nas X - THE ART OF REALIZATION.mp3",
	title: "THE ART OF REALIZATION",
	artist: "Lil Nas X",
    answers: ["THE ART OF REALIZATION"]
  },
  {
    file: "Lil Nas X - VOID.mp3",
	title: "VOID",
	artist: "Lil Nas X",
    answers: ["VOID"]
  },
  {
    file: "Lil Nas X - Where Do We Go Now (Music from Lil Nas X Long Live Montero - Official Audio).mp3",
	title: "Where Do We Go Now",
	artist: "Lil Nas X",
    answers: ["Where Do We Go Now"]
  },
  {
    file: "Lil Nas X, Cardi B - Rodeo (Official Audio).mp3",
	title: "Rodeo",
	artist: "Lil Nas X",
    answers: ["Rodeo"]
  },
  {
    file: "Lil Nas X, Jack Harlow - INDUSTRY BABY (EXTENDED).mp3",
	title: "INDUSTRY BABY",
	artist: "Lil Nas X",
    answers: ["INDUSTRY BABY"]
  },
  {
    file: "Lil Nas X, Travis Barker - F9mily (You & Me) (Official Audio).mp3",
	title: "F9mily (You & Me)",
	artist: "Lil Nas X",
    answers: ["F9mily", "family"]
  },
  {
    file: "Lil Nas X, Youngboy Never Broke Again - Late To Da Party (FCK BET) (Official Video).mp3",
	title: "Late To Da Party (FCK BET)",
	artist: "Lil Nas X",
    answers: ["late to da party"]
  },
  {
    file: "06. Mine.mp3",
	title: "Mine",
	artist: "IVE",
    answers: ["mine"]
  },
  {
    file: "0g.mp3",
	title: "0g",
	artist:"fromis_9",
    answers: ["0g"]
  },
  {
    file: "247 (247).mp3",
	title: "247",
	artist:"STAYC",
    answers: ["247", "24 7", "24/7"]
  },
  {
    file: "aespa 'Dreams Come True' Lyrics (에스파 Dreams Come True 가사) (Color Coded Lyrics).mp3",
	title: "Dreams Come True",
	artist:"AESPA",
    answers: ["dreams come true"]
  },
  {
    file: "aespa Savage Lyrics (에스파 Savage 가사) (Color Coded Lyrics).mp3",
	title: "Savage",
	artist:"AESPA",
    answers: ["savage"]
  },
  {
    file: "aespa 에스파 'Life's Too Short (English Ver.)' Lyric Video.mp3",
	title: "Life's Too Short (English Ver.)",
	artist:"AESPA",
    answers: ["life's too short", "lifes too short"]
  },
  {
    file: "Annie.mp3",
	title: "Annie",
	artist:"BBY GOYARD",
    answers: ["annie"]
  },
  {
    file: "BBY GOYARD - Dreamweaver (prod. Taylor Morgan).mp3",
	title: "Dreamweaver",
	artist:"BBY GOYARD",
    answers: ["dreamweaver", "dream weaver"]
  },
  {
    file: "BBY GOYARD - Rob Dyrdek $$$ (Official Video).mp3",
	title: "Rob Dyrdek $$$",
	artist:"BBY GOYARD",
    answers: ["rob dyrdek"]
  },
  {
    file: "BBY GOYARD - Vamp Fangs [Dir. by @DotComNirvan].mp3",
	title: "Vamp Fangs",
	artist:"BBY GOYARD",
    answers: ["vamp fangs"]
  },
  {
    file: "Beam.mp3",
	title: "Beam",
	artist:"tripleS",
    answers: ["beam"]
  },
  {
    file: "Bryn (브린) - 'YANKEE' - YANKEE (feat.Tommy Strate)(prod.by Santa Paine).mp3",
	title: "YANKEE",
	artist:"Bryn",
    answers: ["yankee"]
  },
  {
    file: "C-REAL(씨리얼) _ No No No No No MV.mp3",
	title: "No No No No No",
	artist:"C-REAL(씨리얼)",
    answers: ["no no no no no", "no"]
  },
  {
    file: "Chowall.mp3",
	title: "Chowall",
	artist:"tripleS",
    answers: ["chowall"]
  },
  {
    file: "Claire Yotts - Self Made (Official Audio).mp3",
	title: "Self Made",
	artist:"Claire Yotts",
    answers: ["self made"]
  },
  {
    file: "CLASSy Psycho and Beautiful Lyrics (Color Coded Lyrics).mp3",
	title: "Psycho and Beautiful",
	artist:"CLASSy",
    answers: ["psycho and beautiful", "p and beautiful"]
  },
  {
    file: "Colorful.mp3",
	title: "Colorful",
	artist:"tripleS",
    answers: ["colorful"]
  },
  {
    file: "COMPLEX (COMPLEX).mp3",
	title: "COMPLEX",
	artist:"STAYC",
    answers: ["complex"]
  },
  {
    file: "Cupid.mp3",
	title: "Cupid",
	artist:"Fifty Fifty",
    answers: ["cupid"]
  },
  {
    file: "Destroy Lonely - NEVEREVER (Official Audio).mp3",
	title: "NEVEREVER",
	artist:"Destroy Lonely",
    answers: ["neverever", "never ever"]
  },
  {
    file: "Destroy Lonely - NOSTYLIST (Official Audio).mp3",
	title: "NOSTYLIST",
	artist:"Destroy Lonely",
    answers: ["nostylist", "no stylist"]
  },
  {
    file: "Doublë.mp3",
	title: "Double",
	artist:"Yeat",
    answers: ["double"]
  },
  {
    file: "DRAMA BABY ⧸ MALIBU.mp3",
	title: "DRAMA BABY ⧸ MALIBU",
	artist:"Babyxsosa",
    answers: ["drama baby", "malibu"]
  },
  {
    file: "Effie - Satellite (Official Visualizer).mp3",
	title: "Satellite",
	artist:"Effie",
    answers: ["satellite"]
  },
  {
    file: "Favorite Part.mp3",
	title: "Favorite Part",
	artist:"Jo Yuri",
    answers: ["favorite part", "favourite part"]
  },
  {
    file: "Flash Forward.mp3",
	title: "Flash Forward",
	artist:"LE SSERAFIM",
    answers: ["flash forward"]
  },
  {
    file: "Fragments.mp3",
	title: "Fragments",
	artist:"BBY GOYARD",
    answers: ["fragments"]
  },
  {
    file: "fromis_9 (프로미스나인) 'DM' Official MV.mp3",
	title: "DM",
	artist:"fromis_9",
    answers: ["dm"]
  },
  {
    file: "fromis_9 (프로미스나인) 'Escape Room' Performance Video.mp3",
	title: "Escape Room",
	artist:"fromis_9",
    answers: ["escape room"]
  },
  {
    file: "fromis_9 (프로미스나인) 'Stay This Way' Performance Video.mp3",
	title: "Stay This Way",
	artist:"fromis_9",
    answers: ["stay this way"]
  },
  {
    file: "fromis_9 (프로미스나인) 'Talk & Talk' Performance Video.mp3",
	title: "Talk & Talk",
	artist:"fromis_9",
    answers: ["talk & talk", "talk and talk"]
  },
  {
    file: "Good Parts (when the quality is bad but I am).mp3",
	title: "Good Parts (when the quality is bad but I am)",
	artist:"LE SSERAFIM",
    answers: ["good parts"]
  },
  {
    file: "Gët Busy [Official Music Video].mp3",
	title: "Get Busy",
	artist:"Yeat",
    answers: ["get busy"]
  },
  {
    file: "How it go [Official Audio].mp3",
	title: "How it go",
	artist:"Yeat",
    answers: ["how it go"]
  },
  {
    file: "Hush Hush.mp3",
	title: "Hush Hush",
	artist:"fromis_9",
    answers: ["hush hush", "hush"]
  },
  {
    file: "I LIKE IT (I LIKE IT).mp3",
	title: "I LIKE IT",
	artist:"STAYC",
    answers: ["i like it"]
  },
  {
    file: "Internet Money - No Handoutz feat. Yeat (Official Lyric Video).mp3",
	title: "No Handoutz",
	artist:"Yeat",
    answers: ["no handoutz", "no handouts"]
  },
  {
    file: "IVE Cherish Lyrics (Color Coded Lyrics).mp3",
    title: "Cherish",
    artist: "IVE",
    answers: ["cherish"]
  },
  {
    file: "IVE Lips Lyrics (아이브 Lips 가사) (Color Coded Lyrics).mp3",
    title: "Lips",
    artist: "IVE",
    answers: ["lips"]
  },
  {
    file: "IVE 아이브 'I AM' MV.mp3",
    title: "I AM",
    artist: "IVE",
    answers: ["i am"]
  },
  {
    file: "JO YURI (조유리) - GLASSY「Audio」.mp3",
    title: "GLASSY",
    artist: "Jo Yuri",
    answers: ["glassy"]
  },
  {
    file: "Jo Yuri Blank Lyrics (조유리 Blank 가사) (Color Coded Lyrics).mp3",
    title: "blank",
    artist: "Jo Yuri",
    answers: ["blank"]
  },
  {
    file: "Jo Yuri Loveable Lyrics (조유리 Loveable 가사) (Color Coded Lyrics).mp3",
    title: "Loveable",
    artist: "Jo Yuri",
    answers: ["loveable"]
  },
  {
    file: "LE SSERAFIM 'ANTIFRAGILE' Lyrics (레세라핌 ANTIFRAGILE 가사) (Color Coded Lyrics).mp3",
    title: "ANTIFRAGILE",
    artist: "LE SSERAFIM",
    answers: ["antifragile", "anti fragile"]
  },
  {
    file: "Let's All Love Lain.mp3",
    title: "Let's All Love Lain",
    artist: "TOKYOPILL",
    answers: ["let's all love lain", "lets all love lain"]
  },
  {
    file: "Lying 4 fun.mp3",
    title: "Lying 4 fun",
    artist: "Yeat",
    answers: ["lying 4 fun", "lying for fun"]
  },
  {
    file: "Misery ᐸ3 Company.mp3",
    title: "Misery ᐸ3 Company",
    artist: "BBY GOYARD",
    answers: ["misery loves company", "misery"]
  },
  {
    file: "Nettspend - Beach Leak (Official Audio).mp3",
    title: "Beach Leak",
    artist: "Nettspend",
    answers: ["beach leak"]
  },
  {
    file: "Nettspend - Fuck Swag (OG Music Video).mp3",
    title: "Fuck Swag",
    artist: "Nettspend",
    answers: ["fuck swag"]
  },
  {
    file: "Nettspend - We Not Like You [Dir. by Tycho].mp3",
    title: "We Not Like You",
    artist: "Nettspend",
    answers: ["we not like you"]
  },
  {
    file: "New World.mp3",
    title: "New World",
    artist: "Effie",
    answers: ["new world"]
  },
  {
    file: "NewJeans (뉴진스) 'Cookie' Official MV.mp3",
    title: "Cookie",
    artist: "NewJeans",
    answers: ["cookie"]
  },
  {
    file: "NewJeans (뉴진스) 'Ditto' Performance Video.mp3",
    title: "Ditto",
    artist: "NewJeans",
    answers: ["ditto"]
  },
  {
    file: "NewJeans (뉴진스) 'Hurt' Official MV.mp3",
    title: "Hurt",
    artist: "NewJeans",
    answers: ["hurt"]
  },
  {
    file: "NewJeans (뉴진스) 'Hype Boy' Official MV (Performance ver.1).mp3",
    title: "Hype Boy",
    artist: "NewJeans",
    answers: ["hype boy"]
  },
  {
    file: "NewJeans (뉴진스) 'OMG' Official MV (Performance ver.1).mp3",
    title: "OMG",
    artist: "NewJeans",
    answers: ["omg"]
  },
  {
    file: "NewJeans Attention Lyrics (뉴진스 Attention 가사) (Color Coded Lyrics).mp3",
    title: "Attention",
    artist: "NewJeans",
    answers: ["attention"]
  },
  {
    file: "Night Drive.mp3",
    title: "Night Drive",
    artist: "GFRIEND	",
    answers: ["night drive"]
  },
  {
    file: "NMIXX 'O.O' Lyrics (엔믹스 O.O 가사) (Color Coded Lyrics).mp3",
    title: "O.O",
    artist: "NMIXX",
    answers: ["o.o", "oo"]
  },
    {
    file: "NMIXX - COOL (Your rainbow) ｜ SPECIAL VIDEO.mp3",
    title: "COOL (Your rainbow)",
    artist: "NMIXX",
    answers: ["cool", "cool your rainbow"]
  },
  {
    file: "NMIXX DICE Lyrics (엔믹스 DICE 가사) (Color Coded Lyrics).mp3",
    title: "DICE",
    artist: "NMIXX",
    answers: ["dice"]
  },
  {
    file: "Nothing quite like that Spectral cares.mp3",
    title: "Nothing quite like that Spectral cares",
    artist: "BBY GOYARD",
    answers: ["nothing quite like that spectral cares"]
  },
  {
    file: "On tha linë.mp3",
    title: "On tha line",
    artist: "Yeat",
    answers: ["on tha line"]
  },
  {
    file: "Out thë way [Official Audio].mp3",
    title: "Out the way",
    artist: "Yeat",
    answers: ["out the way"]
  },
  {
    file: "Poppin.mp3",
    title: "Poppin",
    artist: "Yeat",
    answers: ["poppin"]
  },
  {
    file: "Purity Ring - Fineshrine (4AD).mp3",
    title: "Fineshrine",
    artist: "Purity Ring",
    answers: ["fineshrine"]
  },
  {
    file: "purity ring - neverend (official lyric video).mp3",
    title: "neverend",
    artist: "Purity Ring",
    answers: ["neverend"]
  },
  {
    file: "Shannon's Ladder.mp3",
    title: "Shannon's Ladder",
    artist: "BBY GOYARD",
    answers: ["shannon's ladder", "shannons ladder"]
  },
  {
    file: "SoFaygo - Off the Map (Official Audio).mp3",
    title: "Off the Map",
    artist: "SoFaygo",
    answers: ["off the map"]
  },
  {
    file: "Sour Grapes.mp3",
    title: "Sour Grapes",
    artist: "LE SSERAFIM",
    answers: ["sour grapes"]
  },
  {
    file: "STAYC (스테이씨) - 'LOVE' Lyrics [Color Coded_Han_Rom_Eng].mp3",
    title: "LOVE",
    artist: "STAYC",
    answers: ["love"]
  },
  {
    file: "STAYC (스테이씨) - YOUNG LUV 「Audio」.mp3",
    title: "YOUNG LUV",
    artist: "STAYC",
    answers: ["young luv", "young love"]
  },
  {
    file: "STAYC 스테이씨   I'LL BE THERE   Lyrics (ColorCoded ENG HAN ROM 가사).mp3",
    title: "I'LL BE THERE",
    artist: "STAYC",
    answers: ["i'll be there", "ill be there"]
  },
  {
    file: "STAYC(스테이씨) 'BEAUTIFUL MONSTER' MV.mp3",
    title: "BEAUTIFUL MONSTER",
    artist: "STAYC",
    answers: ["beautiful monster"]
  },
  {
    file: "STAYC(스테이씨) 'RUN2U' MV.mp3",
    title: "RUN2U",
    artist: "STAYC",
    answers: ["run2u"]
  },
  {
    file: "STAYC(스테이씨) '색안경 (STEREOTYPE)' MV.mp3",
    title: "STEREOTYPE",
    artist: "STAYC",
    answers: ["stereotype"]
  },
  {
    file: "Strangewrld.mp3",
    title: "Strangewrld",
    artist: "Effie",
    answers: ["strangewrld", "strangeworld", "strange world"]
  },
  {
    file: "Systëm [Official Audio].mp3",
    title: "System",
    artist: "Yeat",
    answers: ["system"]
  },
  {
    file: "TANK.mp3",
    title: "TANK",
    artist: "NMIXX",
    answers: ["tank"]
  },
  {
    file: "TH13TEEN GHOSTS.mp3",
    title: "TH13TEEN GHOSTS",
    artist: "BBY GOYARD",
    answers: ["th13teen ghosts", "13 ghosts", "thirteen ghosts"]
  },
  {
    file: "The Ugly Truth, Pt. 1.mp3",
    title: "The Ugly Truth, Pt. 1",
    artist: "BBY GOYARD",
    answers: ["the ugly truth, pt. 1", "the ugly truth"]
  },
  {
    file: "Told ya.mp3",
    title: "Told ya",
    artist: "Yeat",
    answers: ["told ya"]
  },
  {
    file: "Vierre Cloud - moment (Official Audio).mp3",
    title: "moment",
    artist: "Vierre Cloud",
    answers: ["moment"]
  },
  {
    file: "YEAT - ＂Tonka 2＂ OFFICIAL VERSION.mp3",
    title: "Tonka 2",
    artist: "YEAT",
    answers: ["tonka 2"]
  },
  {
    file: "[CORRECT] LE SSERAFIM (르세라핌) - 'Impurities' Lyrics [Color Coded_Han_Rom_Eng].mp3",
    title: "Impurities",
    artist: "LE SSERAFIM",
    answers: ["impurities"]
  },
  {
    file: "[MV] tripleS(트리플에스) _ Generation (Dance Ver.).mp3",
    title: "Generation",
    artist: "tripleS",
    answers: ["generation"]
  },
  {
    file: "ЗАБВЕНИЕ.mp3",
    title: "ЗАБВЕНИЕ",
    artist: "I61",
    answers: ["забвение", "zabviene", "zabvenie"]
  },
  {
    file: "달아 Moon.mp3",
    title: "달아 Moon",
    artist: "EVERGLOW",
    answers: ["moon"]
  },
  {
    file: "the bell.mp3",
    title: "The Bell",
    artist: "Yeat",
    answers: ["the bell"]
  },
  {
    file: "dopamine.mp3",
    title: "Dopamine (GISELLE SOLO)",
    artist: "AESPA",
    answers: ["dopamine"]
  },
    {
    file: "05. IVE - OTT.mp3",
    title: "OTT",
    artist: "IVE",
    answers: ["OTT"]
  },
  {
    file: "aespa 에스파 'Better Things' Performance Video.mp3",
    title: "Better Things",
    artist: "AESPA",
    answers: ["better things"]
  },
  {
    file: "Supernova - aespa (Audio).mp3",
    title: "Supernova",
    artist: "AESPA",
    answers: ["SUPERNOVA"]
  },
  {
    file: "AGIRLISAGUN.mp3",
    title: "AGIRLISAGUN",
    artist: "NOAH, Yung Wolf",
    answers: ["AGIRLISAGUN", "a girl is a gun"]
  },
  {
    file: "ARTMS ‘Pre2 ： Flower Rhythm' Official Track Video.mp3",
    title: "Flower Rhythm",
    artist: "ARTMS",
    answers: ["FLOWER RHYTHM"]
  },
  {
    file: "ARTMS ‘Pre4 ： Air' Official Track Video.mp3",
    title: "Air",
    artist: "ARTMS",
    answers: ["AIR"]
  },
  {
    file: "ARTMS (아르테미스) 'Virtual Angel' Official Audio.mp3",
    title: "Virtual Angel",
    artist: "ARTMS",
    answers: ["VIRTUAL ANGEL"]
  },
  {
    file: "Asian Rock.mp3",
    title: "Asian Rock",
    artist: "LAZER DIM 700",
    answers: ["asian rock"]
  },
  {
    file: "Run Shannon Run.mp3",
    title: "Run Shannon Run",
    artist: "BBY GOYARD",
    answers: ["RUN SHANNON RUN"]
  },
  {
    file: "BBY GOYARD - VERY VALID prod.Fluxury (directed by Ryan Tempke).mp3",
    title: "VERY VALID",
    artist: "BBY GOYARD",
    answers: ["VERY VALID"]
  },
  {
    file: "Be Mine (Be Mine).mp3",
    title: "Be Mine",
    artist: "STAYC",
    answers: ["BE MINE"]
  },
  {
    file: "BYOB (bring your own best friend) (BYOB (bring your own best friend)).mp3",
    title: "BYOB (bring your own best friend)",
    artist: "Billlie",
    answers: ["BRING YOUR OWN BEST FRIEND", "BYOB"]
  },
  {
    file: "Black Soul Dress.mp3",
    title: "Black Soul Dress",
    artist: "tripleS",
    answers: ["black soul dress", "black dress"]
  },
  {
    file: "Breathe In, Breathe Out.mp3",
    title: "Breathe In, Breathe Out",
    artist: "Jena Powder",
    answers: ["breathe in breathe out", "breathe in"]
  },
  {
    file: "CHUU 츄 'Strawberry Rush' Performance Video.mp3",
    title: "Strawberry Rush",
    artist: "CHUU",
    answers: ["STRAWBERRY RUSH"]
  },
  {
    file: "DAMN.mp3",
    title: "DAMN",
    artist: "4ourYou",
    answers: ["damn"]
  },
  {
    file: "Deja-Vu.mp3",
    title: "Deja-Vu",
    artist: "tripleS",
    answers: ["deja-vu", "dejavu", "deja vu"]
  },
  {
    file: "Dimension (KRE Ver.).mp3",
    title: "Dimension (KRE Ver.)",
    artist: "tripleS",
    answers: ["dimension", "dimensions"]
  },
  {
    file: "Effie - 미워미워 (Official Music Video).mp3",
    title: "미워미워",
    artist: "Effie",
    answers: ["miwomiwo", "miwo", "미워미워"]
  },
  {
    file: "Empty.mp3",
    title: "Empty",
    artist: "Jena Powder",
    answers: ["empty"]
  },
  {
    file: "Fashion Trappin - Brennan Jones.mp3",
    title: "Fashion Trappin",
    artist: "Brennan Jones",
    answers: ["fashion trappin"]
  },
    {
    file: "Final Destination.mp3",
    title: "Final Destination",
    artist: "BBY GOYARD",
    answers: ["final destination"]
  },
  {
    file: "fromis_9 - menow [Audio].mp3",
    title: "menow",
    artist: "fromis_9",
    answers: ["menow", "me now"]
  },
  {
    file: "fromis_9 (프로미스나인) 'Supersonic' Official Audio.mp3",
    title: "Supersonic",
    artist: "fromis_9",
    answers: ["supersonic"]
  },
  {
    file: "Frou Frou - A New Kind Of Love (Demo) feat. Imogen Heap & Guy Sigsworth [639hz].mp3",
    title: "A New Kind Of Love",
    artist: "Imogen Heap",
    answers: ["a new kind of love"]
  },
  {
    file: "Get Up.mp3",
    title: "Get Up",
    artist: "NewJeans",
    answers: ["get up"]
  },
  {
    file: "Grade 9.mp3",
    title: "Grade 9",
    artist: "Joeyy",
    answers: ["grade 9"]
  },
  {
    file: "GroovyRoom - Yes or No (Feat. 허윤진 of LE SSERAFIM, Crush) (Official Lyric Video).mp3",
    title: "Yes or No",
    artist: "LE SSERAFIM",
    answers: ["yes or no"]
  },
  {
    file: "Hearts2Hearts 하츠투하츠 'The Chase' Performance Video.mp3",
    title: "The Chase",
    artist: "Hearts2Hearts",
    answers: ["THE CHASE"]
  },
  {
    file: "I Just Wanna Know.mp3",
    title: "I Just Wanna Know",
    artist: "Jena Powder",
    answers: ["i just wanna know"]
  },
  {
    file: "I Wanna Do (I Wanna Do).mp3",
    title: "I Wanna Do",
    artist: "STAYC",
    answers: ["i wanna do"]
  },
  {
    file: "Lucky Girl Syndrome (Audio).mp3",
    title: "Lucky Girl Syndrome",
    artist: "ILLIT",
    answers: ["lucky girl syndrome"]
  },
  {
    file: "ILLIT (아일릿) - Cherish (My Love) [Audio].mp3",
    title: "Cherish (My Love)",
    artist: "ILLIT",
    answers: ["cherish", "CHERISH MY LOVE"]
  },
  {
    file: "ILLIT (아일릿) 'Magnetic' Official Audio.mp3",
    title: "Magnetic",
    artist: "ILLIT",
    answers: ["magnetic"]
  },
  {
    file: "Imogen Heap - Headlock (Official Video).mp3",
    title: "Headlock",
    artist: "Imogen Heap",
    answers: ["headlock"]
  },
  {
    file: "Inception.mp3",
    title: "Inception",
    artist: "Jena Powder",
    answers: ["inception"]
  },
  {
    file: "ITZY 'FIVE' Lyrics (있지 FIVE 가사) [Color Coded Han_Rom_Eng] ｜ ShadowByYoongi.mp3",
    title: "FIVE",
    artist: "ITZY",
    answers: ["FIVE"]
  },
  {
    file: "ITZY (イッチ) - 'Sugar-holic' Lyrics [Color Coded_Kan_Rom_Eng].mp3",
    title: "Sugar-holic",
    artist: "ITZY",
    answers: ["SUGAR HOLIC", "sugarholic"]
  },
  {
    file: "IVE 아이브 'Off The Record' MV.mp3",
    title: "Off The Record",
    artist: "IVE",
    answers: ["OFF THE RECORD"]
  },
  {
    file: "izna 'TIMEBOMB' Lyrics (이즈나 TIMEBOMB 가사) [Color Coded Han_Rom_Eng]   ShadowByYoongi.mp3",
    title: "TIMEBOMB",
    artist: "izna",
    answers: ["timebomb"]
  },
  {
    file: "I’ll Like You.mp3",
    title: "I’ll Like You",
    artist: "ILLIT",
    answers: ["ILL LIKE YOU", "i’ll like you"]
  },
  {
    file: "Nobody Knows (Nobody Knows).mp3",
    title: "Nobody Knows",
    artist: "KISS OF LIFE",
    answers: ["nobody knows"]
  },
  {
    file: "KISS OF LIFE Sticky Lyrics (Color Coded Lyrics).mp3",
    title: "Sticky",
    artist: "KISS OF LIFE",
    answers: ["sticky"]
  },
  {
    file: "KISS OF LIFE (키스오브라이프) 'Sugarcoat (NATTY Solo)' MV.mp3",
    title: "Sugarcoat (NATTY Solo)",
    artist: "KISS OF LIFE",
    answers: ["sugarcoat"]
  },
  {
    file: "LE SSERAFIM 'EASY' Lyrics (르세라핌 EASY 가사) (Color Coded Lyrics).mp3",
    title: "EASY",
    artist: "LE SSERAFIM",
    answers: ["easy"]
  },
  {
    file: "LE SSERAFIM (르세라핌) 'Perfect Night' OFFICIAL M⧸V with OVERWATCH 2 (Choreography ver.).mp3",
    title: "Perfect Night",
    artist: "LE SSERAFIM",
    answers: ["perfect night"]
  },
  {
    file: "LE SSERAFIM (르세라핌) 'Smart (English ver.)' Official Visualizer.mp3",
    title: "Smart (English ver.)",
    artist: "LE SSERAFIM",
    answers: ["smart"]
  },
  {
    file: "Midnight Fiction.mp3",
    title: "Midnight Fiction",
    artist: "ILLIT",
    answers: ["midnight fiction"]
  },
  {
    file: "My World.mp3",
    title: "My World",
    artist: "ILLIT",
    answers: ["my world"]
  },
  {
    file: "NewJeans 'New Jeans (ft. The Powerpuff Girls)' Lyrics (뉴진스 New Jeans 가사) (Color Coded Lyrics).mp3",
    title: "New Jeans",
    artist: "NewJeans",
    answers: ["new jeans", "newjeans"]
  },
  {
    file: "NewJeans (뉴진스) 'ASAP' Official MV.mp3",
    title: "ASAP",
    artist: "NewJeans",
    answers: ["asap"]
  },
  {
    file: "NewJeans 'Bubble Gum' Lyrics (뉴진스 Bubble Gum 가사) (Color Coded Lyrics).mp3",
    title: "Bubble Gum",
    artist: "NewJeans",
    answers: ["bubble gum", "bubblegum"]
  },
  {
    file: "NewJeans (뉴진스) 'Cool With You' Official MV (Performance ver.).mp3",
    title: "Cool With You",
    artist: "NewJeans",
    answers: ["cool with you"]
  },
  {
    file: "NewJeans 'ETA' Lyrics (뉴진스 ETA 가사) (Color Coded Lyrics).mp3",
    title: "ETA",
    artist: "NewJeans",
    answers: ["eta"]
  },
  {
    file: "NewJeans 'How Sweet' Lyrics (뉴진스 How Sweet 가사) (Color Coded Lyrics).mp3",
    title: "How Sweet",
    artist: "NewJeans",
    answers: ["how sweet"]
  },
  {
    file: "NewJeans (뉴진스) 'Right Now' Lyrics (Color Coded Lyrics).mp3",
    title: "Right Now",
    artist: "NewJeans",
    answers: ["right now"]
  },
  {
    file: "NewJeans 'Super Shy' Lyrics (뉴진스 Super Shy 가사) (Color Coded Lyrics).mp3",
    title: "Super Shy",
    artist: "NewJeans",
    answers: ["super shy"]
  },
  {
    file: "NewJeans (뉴진스) ‘Supernatural’ Official MV (Part.1).mp3",
    title: "Supernatural",
    artist: "NewJeans",
    answers: ["supernatural"]
  },
  {
    file: "NMIXX “Passionfruit” (Official Audio).mp3",
    title: "Passionfruit",
    artist: "NMIXX",
    answers: ["passionfruit"]
  },
  {
    file: "NMIXX Roller Coaster Lyrics (Color Coded Lyrics).mp3",
    title: "Roller Coaster",
    artist: "NMIXX",
    answers: ["roller coaster"]
  },
  {
    file: "NMIXX (엔믹스) 'Know about me' (Color Coded Lyrics).mp3",
    title: "Know about me",
    artist: "NMIXX",
    answers: ["know about me"]
  },
  {
    file: "NMIXX(엔믹스) “Papillon” (Official Audio).mp3",
    title: "Papillon",
    artist: "NMIXX",
    answers: ["papillon"]
  },
  {
    file: "NMIXX 'See that' Lyrics (엔믹스 별별별 가사) (Color Coded Lyrics).mp3",
    title: "See that",
    artist: "NMIXX",
    answers: ["see that"]
  },
  {
    file: "ODD EYE CIRCLE Air Force One Lyrics (Color Coded Lyrics).mp3",
    title: "Air Force One",
    artist: "ARTMS",
    answers: ["air force one"]
  },
  {
    file: "Oui.mp3",
    title: "Oui",
    artist: "tripleS",
    answers: ["oui"]
  },
  {
    file: "Pimple.mp3",
    title: "Pimple",
    artist: "ILLIT",
    answers: ["pimple"]
  },
  {
    file: "Pink Heartz.mp3",
    title: "Pink Heartz",
    artist: "Jena Powder",
    answers: ["pink heartz", "pinkheartz", "pink hearts", "pinkhearts"]
  },
  {
    file: "Real world.mp3",
    title: "Real world",
    artist: "Loossemble",
    answers: ["real world"]
  },
  {
    file: "Roses (ISA) (Roses (ISA)).mp3",
    title: "Roses",
    artist: "STAYC",
    answers: ["roses"]
  },
  {
    file: "Round and Around.mp3",
    title: "Round and Around",
    artist: "Jo Yuri",
    answers: ["round and around"]
  },
  {
    file: "Seoul Sonyo Sound.mp3",
    title: "Seoul Sonyo Sound",
    artist: "tripleS",
    answers: ["seoul sonyo sound", "seoul sound"]
  },
  {
    file: "SHOOT (PINKHEARTZ 2 ZERO).mp3",
    title: "SHOOT (PINKHEARTZ 2 ZERO)",
    artist: "Jena Powder",
    answers: ["shoot"]
  },
  {
    file: "Sparkle.mp3",
	title: "Sparkle",
	artist: "ARTMS",
    answers: ["sparkle"]
  },
  {
    file: "Speed Love.mp3",
	title: "Speed Love",
	artist: "tripleS",
    answers: ["speed love"]
  },
  {
    file: "STAYC GPT Lyrics (Color Coded Lyrics).mp3",
	title: "GPT",
	artist: "STAYC",
    answers: ["gpt"]
  },
  {
    file: "Strawberry soda.mp3",
	title: "Strawberry soda",
	artist: "Loossemble",
    answers: ["strawberry soda"]
  },
  {
    file: "Tame Impala - New Person, Same Old Mistakes (Audio).mp3",
	title: "New Person Same Old Mistakes",
	artist: "Tame Impala",
    answers: ["new person same old mistakes"]
  },
  {
    file: "tripleS EVOLution 37.5 Celsius Lyrics (Color Coded Lyrics).mp3",
	title: "37.5 Celsius",
	artist: "tripleS",
    answers: ["37.5 celsius", "celsius"]
  },
  {
    file: "tripleS Glow (트리플에스) '내적 댄스 (Inner Dance)' Official Performance.mp3",
	title: "Inner Dance",
	artist: "tripleS",
    answers: ["inner dance"]
  },
  {
    file: "복합성 (Complexity).mp3",
	title: "Complexity",
	artist: "tripleS",
    answers: ["complexity"]
  },
  {
    file: "tripleS(트리플에스) 'Girls Never Die' Official MV.mp3",
	title: "Girls Never Die",
	artist: "tripleS",
    answers: ["girls never die"]
  },
  {
    file: "tripleS(트리플에스) EVOLution ‘Invincible’ MV.mp3",
	title: "Invincible",
	artist: "tripleS",
    answers: ["invincible"]
  },
  {
    file: "tripleS(트리플에스) LOVElution ‘Girls' Capitalism’ Official Dance Ver..mp3",
	title: "Girls Capitalism",
	artist: "tripleS",
    answers: ["girls capitalism"]
  },
  {
    file: "tripleS NXT(트리플에스) 'Just Do It' Official Lyric Video.mp3",
	title: "Just Do It",
	artist: "tripleS",
    answers: ["just do it"]
  },
  {
    file: "UNIS SUPERWOMAN Lyrics (Color Coded Lyrics).mp3",
	title: "SUPERWOMAN",
	artist: "UNIS",
    answers: ["superwoman"]
  },
  {
    file: "03. Whatchu Need (Official Audio).mp3",
	title: "Whatchu Need",
	artist: "UNIS",
    answers: ["whatchu need", "what u need", "what you need", "whatchuneed"]
  },
  {
    file: "UNIS Curious Lyrics (Color Coded Lyrics).mp3",
	title: "Curious",
	artist: "UNIS",
    answers: ["curious"]
  },
  {
    file: "UNIS(유니스) ‘Poppin’' Dance Practice (Moving ver.).mp3",
	title: "Poppin’",
	artist: "UNIS",
    answers: ["poppin", "popping"]
  },
  {
    file: "UNIS(유니스) 'Swicy' (Color Coded Lyrics).mp3",
	title: "Swicy",
	artist: "UNIS",
    answers: ["swicy"]
  },
  {
    file: "bigger thën everything [Official Audio].mp3",
	title: "bigger then everything",
	artist: "Yeat",
    answers: ["bigger then everything"]
  },
  {
    file: "YOUNG POSSE (영파씨) - Blue Dot Colour-coded lyrics.mp3",
	title: "Blue Dot",
	artist: "YOUNG POSSE",
    answers: ["blue dot"]
  },
  {
    file: "YUNGTARR - IPHONE (Directed by Tarr).mp3",
	title: "IPHONE",
	artist: "YUNGTARR",
    answers: ["iphone"]
  },
  {
    file: "[MV] BIBI(비비) _ I AM SHAMPOO(안녕하세오 샴푸애요 (I AM...)).mp3",
	title: "I AM SHAMPOO",
	artist: "BIBI",
    answers: ["i am shampoo"]
  },
  
    ];

 // ───────────── FILTER SETUP ─────────────
  const uniqueArtists = [...new Set(songs.map(s => s.artist))];
  let activeArtists = new Set(uniqueArtists);

  // Shuffle helper
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  let filteredSongs = songs.filter(s => activeArtists.has(s.artist));
  shuffleArray(filteredSongs);

  // DOM references
  const mainContent = document.getElementById("main-content");
  const playBtn = document.getElementById("play-btn");
  const submitBtn = document.getElementById("submit-btn");
  const feedback = document.getElementById("feedback");
  const guessInput = document.getElementById("guess");
  const progress = document.getElementById("progress");

  

 // Artist filter UI container
// Artist filter UI container
const artistFilterContainer = document.getElementById("artist-filter") || document.createElement("div");
artistFilterContainer.id = "artist-filter";
artistFilterContainer.innerHTML = "<h2>🎤 Filter Artists</h2>";
Object.assign(artistFilterContainer.style, {
  position: "fixed",
  left: "0px",
  top: "0px",
  background: "#2c2c4a",
  padding: "10px",
  borderRadius: "10px",
  maxHeight: "80vh",
  overflowY: "auto",
  zIndex: "1000",
  width: "280px",
  color: "#fff"
});

// Add Select All / Deselect All button at the top of artist filter
const toggleAllBtn = document.createElement("button");
toggleAllBtn.textContent = "Select/Deselect All";
toggleAllBtn.style.marginBottom = "10px";
toggleAllBtn.style.width = "100%";
toggleAllBtn.style.cursor = "pointer";
toggleAllBtn.style.marginLeft = "-0px";      // move button 10px from left side of container

toggleAllBtn.addEventListener("click", () => {
  const allSelected = uniqueArtists.every(artist => activeArtists.has(artist));
  if (allSelected) {
    activeArtists.clear();
  } else {
    uniqueArtists.forEach(artist => activeArtists.add(artist));
  }
  artistFilterContainer.querySelectorAll("label").forEach(label => {
    const cb = label.querySelector("input[type=checkbox]");
    const artistName = label.textContent.trim();
    cb.checked = activeArtists.has(artistName);
  });
  filterSongs();
});

artistFilterContainer.appendChild(toggleAllBtn);

// --- New: Artist Search Input ---
const artistSearchInput = document.createElement("input");
artistSearchInput.type = "search";
artistSearchInput.placeholder = "Search artists...";
artistSearchInput.style.cssText = `
  width: 100%;
  padding: 5px 8px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  box-sizing: border-box;
`;
artistFilterContainer.appendChild(artistSearchInput);

// Container for artist checkboxes so we can filter them easily
const artistListContainer = document.createElement("div");
artistFilterContainer.appendChild(artistListContainer);

uniqueArtists.forEach(artist => {
  const label = document.createElement("label");
  Object.assign(label.style, { display: "block", margin: "4px 0", cursor: "pointer" });

  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.checked = true;
  cb.style.marginRight = "6px";

  cb.addEventListener("change", () => {
    if (cb.checked) activeArtists.add(artist);
    else activeArtists.delete(artist);
    filterSongs();
  });

  label.appendChild(cb);
  label.appendChild(document.createTextNode(artist));
  artistListContainer.appendChild(label);
});

// Filter artist list on search input
artistSearchInput.addEventListener("input", () => {
  const search = artistSearchInput.value.toLowerCase().trim();
  artistListContainer.querySelectorAll("label").forEach(label => {
    const text = label.textContent.toLowerCase();
    label.style.display = text.includes(search) ? "block" : "none";
  });
});



  mainContent.appendChild(artistFilterContainer);

  // Game state variables
  let currentIndex = 0;
  let currentSong = filteredSongs[currentIndex];
  let audio = new Audio(currentSong.file);
  const clipDurations = [1, 2, 4, 6, 8, 10, 15]; // seconds
  let currentClip = 0;
  let isPlaying = false;
  let isFirstLoad = true;
  const chime = new Audio("chime.mp3");

  // Volume control UI
  const volumeContainer = document.createElement("div");
  volumeContainer.style.cssText = "margin-top:20px; display:flex; flex-direction:column; align-items:center;";

  const volumeLabel = document.createElement("label");
  volumeLabel.textContent = "🔉 Volume";
  volumeLabel.style.color = "#bae1ff";
  volumeLabel.style.marginBottom = "5px";

  const volumeSlider = document.createElement("input");
  volumeSlider.type = "range";
  volumeSlider.min = "0";
  volumeSlider.max = "1";
  volumeSlider.step = "0.01";
  volumeSlider.value = "1";

  volumeContainer.appendChild(volumeLabel);
  volumeContainer.appendChild(volumeSlider);
  mainContent.insertBefore(volumeContainer, feedback);

  // Set volumes on all audio elements
  function setVolume(v) {
    audio.volume = v;
    chime.volume = v;
    fullAudio.volume = v;
  }
  volumeSlider.addEventListener("input", () => setVolume(+volumeSlider.value));

  // Skip button setup
  const skipBtn = document.createElement("button");
  skipBtn.textContent = "⏭️ Skip (Reveal More)";
  skipBtn.id = "skip-btn";
  skipBtn.style.height = "40px";

  const controls = document.querySelector(".controls");
  controls.appendChild(skipBtn);

  // Preview progress meter
  const progressMeter = document.createElement("progress");
  progressMeter.id = "preview-meter";
  progressMeter.max = 1;
  progressMeter.value = 0;
  progressMeter.style.cssText = "width:150px; margin-top:10px;";
  volumeContainer.appendChild(progressMeter);

  // History container
  const history = document.createElement("div");
  history.id = "history";
  history.innerHTML = "<h2>🎶 Guessed Songs</h2><div id='history-list'></div>";
  mainContent.appendChild(history);

  function addToHistory(name, result = "") {
    const historyList = document.getElementById("history-list");
    const guessItem = document.createElement("div");
    guessItem.className = "guess-item";

    const guessText = document.createElement("span");
    guessText.className = "guess-text";
    guessText.textContent = name;
    guessItem.appendChild(guessText);

    if (result) {
      const guessResult = document.createElement("span");
      guessResult.className = "guess-result";
      guessResult.textContent = result;
      guessItem.appendChild(guessResult);
    }
    historyList.insertBefore(guessItem, historyList.firstChild);
  }

  // Suggestions box for guess input
  const suggestionsBox = document.createElement("div");
  suggestionsBox.id = "suggestions";
  Object.assign(suggestionsBox.style, {
    position: "absolute",
    background: "#2c2c4a",
    color: "#fff",
    border: "1px solid #555",
    borderRadius: "10px",
    padding: "5px",
    marginTop: "5px",
    zIndex: "999",
    display: "none",
    maxHeight: "500px",
    overflowY: "auto"
  });
  document.body.appendChild(suggestionsBox);

  function positionSuggestionsBox() {
    const rect = guessInput.getBoundingClientRect();
    suggestionsBox.style.left = rect.left + "px";
    suggestionsBox.style.top = rect.bottom + window.scrollY + "px";
    suggestionsBox.style.width = rect.width + "px";
  }

  window.addEventListener("resize", positionSuggestionsBox);
  window.addEventListener("scroll", positionSuggestionsBox);

  guessInput.addEventListener("input", () => {
    const input = guessInput.value.toLowerCase().trim();
    suggestionsBox.innerHTML = "";
    positionSuggestionsBox();
    if (input === "") {
      suggestionsBox.style.display = "none";
      return;
    }
    const matched = songs
      .map(song => ({
        display: `${song.artist} - ${song.title}`,
        value: `${song.artist.toLowerCase()} ${song.title.toLowerCase()}`,
      }))
      .filter(s => s.value.includes(input));
    if (matched.length === 0) {
      suggestionsBox.style.display = "none";
      return;
    }
    matched.forEach(match => {
      const div = document.createElement("div");
      div.textContent = match.display;
      Object.assign(div.style, {
        padding: "6px 10px",
        cursor: "pointer",
        borderBottom: "1px solid #444",
      });
      div.addEventListener("click", () => {
        guessInput.value = match.display.split(" - ")[1] || match.display;
        suggestionsBox.innerHTML = "";
        suggestionsBox.style.display = "none";
        submitGuess();
      });
      div.addEventListener("mouseover", () => div.style.background = "#444");
      div.addEventListener("mouseout", () => div.style.background = "transparent");
      suggestionsBox.appendChild(div);
    });
    suggestionsBox.style.display = "block";
  });

  guessInput.addEventListener("blur", () => {
    setTimeout(() => {
      suggestionsBox.style.display = "none";
    }, 200);
  });

  // Full audio player controls
  const fullAudio = new Audio();
  fullAudio.preload = "auto";
  fullAudio.style.display = "none";
  mainContent.appendChild(fullAudio);

  const fullPlayerContainer = document.getElementById("full-player-container");
  const fullPlayBtn = document.getElementById("full-play-pause");
  const fullProgCont = document.getElementById("full-progress-container");
  const fullProgBar = document.getElementById("full-progress");

  fullAudio.volume = +volumeSlider.value;

  function showFullPlayer() {
    fullAudio.src = currentSong.file;
    fullPlayerContainer.classList.add("visible");
    fullAudio.play();
    fullPlayBtn.textContent = "⏸️";
  }

  fullPlayBtn.addEventListener("click", () => {
    if (fullAudio.paused) {
      fullAudio.play();
      fullPlayBtn.textContent = "⏸️";
    } else {
      fullAudio.pause();
      fullPlayBtn.textContent = "▶️";
    }
  });

  fullAudio.addEventListener("timeupdate", () => {
    if (!fullAudio.duration) return;
    fullProgBar.style.width = ((fullAudio.currentTime / fullAudio.duration) * 100) + "%";
  });

  fullProgCont.addEventListener("click", e => {
    if (!fullAudio.duration) return;
    const pct = (e.offsetX / fullProgCont.clientWidth);
    fullAudio.currentTime = pct * fullAudio.duration;
  });

  fullAudio.addEventListener("ended", () => fullPlayBtn.textContent = "▶️");

  // ─────────────── GAME LOGIC ───────────────
  function showTransitionMessage() {
    const msg = document.createElement("div");
    msg.textContent = "🎵 New Song!";
    Object.assign(msg.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "15px 30px",
      background: "rgba(0,0,0,0.8)",
      color: "#ffb6f9",
      borderRadius: "15px",
      zIndex: 999,
      opacity: 0,
      transition: "opacity 0.3s"
    });
    document.body.appendChild(msg);
    requestAnimationFrame(() => {
      msg.style.opacity = 1;
      setTimeout(() => {
        msg.style.opacity = 0;
        setTimeout(() => msg.remove(), 500);
      }, 1500);
    });
  }

  function updateProgress() {
    progress.textContent = `Progress: ${currentIndex + 1} / ${filteredSongs.length}`;
  }

  function loadSong(idx) {
    currentSong = filteredSongs[idx];
    audio.src = currentSong.file;
    setVolume(+volumeSlider.value);
    currentClip = 0;
    isPlaying = false;
    playBtn.disabled = submitBtn.disabled = skipBtn.disabled = false;
    feedback.textContent = "";
    guessInput.value = "";
    suggestionsBox.style.display = "none";
    fullPlayerContainer.classList.remove("visible");
    fullAudio.pause();
    fullAudio.currentTime = 0;
    updateProgress();

    // Update preview progress bar as clip plays
    audio.ontimeupdate = () => {
      const duration = clipDurations[currentClip] || 1;
      progressMeter.value = audio.currentTime / duration;
      if (audio.currentTime >= duration) {
        audio.pause();
        isPlaying = false;
      }
    };

    audio.onended = () => {
      progressMeter.value = 0;
      isPlaying = false;
    };

    if (!isFirstLoad) showTransitionMessage();
    isFirstLoad = false;

    // Hide next button on new song load
    nextBtn.style.display = "none";
  }

  function filterSongs() {
    filteredSongs = songs.filter(s => activeArtists.has(s.artist));
    if (filteredSongs.length === 0) {
      feedback.textContent = "⚠️ No songs available with selected artists!";
      // Disable controls
      playBtn.disabled = submitBtn.disabled = skipBtn.disabled = true;
      nextBtn.style.display = "none";
      return;
    }
    feedback.textContent = "";
    shuffleArray(filteredSongs);
    currentIndex = 0;
    loadSong(currentIndex);
    updateProgress();
  }

  function submitGuess() {
    const raw = guessInput.value.trim();
    const g = normalize(raw);

    const cleanTitle = normalize(currentSong.title);
    const ok =
      cleanTitle === g ||
      currentSong.answers.some(answer => normalize(answer) === g);

    if (ok) {
      audio.pause();
      audio.currentTime = 0;
      isPlaying = false;
      feedback.textContent = "✅ Correct! Enjoy the full song below 🎧";
      playBtn.disabled = submitBtn.disabled = skipBtn.disabled = true;
      chime.currentTime = 0;
      chime.play();
      addToHistory(`${currentSong.artist} - ${currentSong.title}`);
      showFullPlayer();
      showNextButton();
    } else {
      currentClip++;
      if (currentClip >= clipDurations.length) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
        feedback.textContent = `❌ Out of tries! The song was: "${currentSong.artist} - ${currentSong.title}". Listen below 🎧`;
        playBtn.disabled = submitBtn.disabled = skipBtn.disabled = true;
        showFullPlayer();
        showNextButton();
      } else {
        feedback.textContent = "❌ Incorrect. Try again!";
      }
    }
  }

  function showNextButton() {
    nextBtn.style.display = "block";
    nextBtn.classList.add("breathing");
  }

  // Event listeners
  playBtn.addEventListener("click", () => {
    if (!isPlaying && currentClip < clipDurations.length) {
      isPlaying = true;
      audio.currentTime = 0;
      audio.play();
      setTimeout(() => {
        audio.pause();
        isPlaying = false;
      }, clipDurations[currentClip] * 1000);
    }
  });

  submitBtn.addEventListener("click", submitGuess);

  guessInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      submitGuess();
    }
  });

  skipBtn.addEventListener("click", () => {
    if (currentClip < clipDurations.length - 1) {
      currentClip++;
      feedback.textContent = `🔊 Skipped to ${clipDurations[currentClip]}s`;
    } else {
      feedback.textContent = "⏭️ Max length reached";
    }
  });

  // Next button (created once)
  const nextBtn = document.createElement("button");
  nextBtn.id = "next-btn";
  nextBtn.textContent = "Next ▶️";
  nextBtn.style.display = "none";
  nextBtn.style.margin = "10px";
  nextBtn.addEventListener("click", () => {
    nextBtn.style.display = "none";
    currentIndex = (currentIndex + 1) % filteredSongs.length;
    loadSong(currentIndex);
  });
  mainContent.insertBefore(nextBtn, fullPlayerContainer);

  // Initial setup
  filterSongs();

});
