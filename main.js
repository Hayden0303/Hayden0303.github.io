//target all elements to save to constants
const homebtn=document.querySelector("#homebtn");
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
const page5btn=document.querySelector("#page5btn");
const headerBtn=document.querySelector("#headerBtn");

//History Page All Buttons
const introBtn=document.querySelector("#IntroBtn");
const historyBtn=document.querySelector("#HistoryBtn");
const globalJourneyBtn=document.querySelector("#GlobalJourneyBtn");
const tilesBtn=document.querySelector("#TilesBtn");

//Types of Mahjong Page All Buttons
const chineseBtn=document.querySelector("#ChineseBtn");
const cantoneseBtn=document.querySelector("#CantoneseBtn");
const japaneseBtn=document.querySelector("#JapaneseBtn");
const americanBtn=document.querySelector("#AmericanBtn");
const taiwaneseBtn=document.querySelector("#TaiwaneseBtn");
const officialChineseBtn=document.querySelector("#OfficialChineseBtn");
const singaporeanBtn=document.querySelector("#SingaporeanBtn");
const comparisonTableBtn=document.querySelector("#ComparisonTableBtn");

//How to Play Page All Buttons
const TileSetBtn=document.querySelector("#TileSetBtn");
const ObjectiveBtn=document.querySelector("#ObjectiveBtn");
const GameSetupBtn=document.querySelector("#GameSetupBtn");
const TileCombinationsBtn=document.querySelector("#TileCombinationsBtn");
const SpecialTilesBtn=document.querySelector("#SpecialTilesBtn");
const GameplayBtn=document.querySelector("#GameplayBtn");
const WinningBtn=document.querySelector("#WinningBtn");
const ScoringBtn=document.querySelector("#ScoringBtn");
const PaymentRulesBtn=document.querySelector("#PaymentRulesBtn");
const EtiquetteBtn=document.querySelector("#EtiquetteBtn");

//Quiz Page
const StartQuizBtn=document.querySelector("#StartQuizBtn");


var allpages=document.querySelectorAll(".page");
var alltext=document.querySelectorAll(".text");

const option1=document.querySelector("#Option1");
const option2=document.querySelector("#Option2");
const option3=document.querySelector("#Option3");
const option4=document.querySelector("#Option4");

//Minigame Page

const startgameBtn=document.querySelector("#StartGameBtn");
const GameObjectiveBtn=document.querySelector("#GameObjectiveBtn");
const ControlsBtn=document.querySelector("#ControlsBtn");
const CreditsBtn=document.querySelector("#CreditsBtn");

const chiAudio = new Audio("Audio/Chi_Audio.mp3");
const pongAudio = new Audio("Audio/Pong_Audio.mp3");



//select all subtopic pages
function hideall(_hiddenitems){ //function to hide all pages
    for(let _hiddenitem of _hiddenitems){ //go through all subtopic pages
        _hiddenitem.style.display="none"; //hide it
    }
}

function show(pgno){ //function to show selected page no
    hideall(allpages);
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    onepage.style.display="block"; //show the page
}


/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
homebtn.addEventListener("click", function () {
    show(0);
})
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    document.getElementById("scoreDisplay").textContent = "";
    show(4);
});
page5btn.addEventListener("click", function () {
    show(5);
});

//History Page
introBtn.addEventListener("click", function () {
    toggleText(0);
});
historyBtn.addEventListener("click", function () {
    toggleText(1);
});
globalJourneyBtn.addEventListener("click", function () {
    toggleText(2);
});
tilesBtn.addEventListener("click", function () {
    toggleText(3);
});

//Types of Mahjong Page
chineseBtn.addEventListener("click", function () {
    toggleText(4);
});
cantoneseBtn.addEventListener("click", function () {
    toggleText(5);
});
japaneseBtn.addEventListener("click", function () {
    toggleText(6);
});
americanBtn.addEventListener("click", function () {
    toggleText(7);
});
taiwaneseBtn.addEventListener("click", function () {
    toggleText(8);
});
officialChineseBtn.addEventListener("click", function () {
    toggleText(9);
});
singaporeanBtn.addEventListener("click", function () {
    toggleText(10);
});
comparisonTableBtn.addEventListener("click", function () {
    toggleText(11);
});

//How to Play Page
TileSetBtn.addEventListener("click", function () {
    toggleText(12);
});
ObjectiveBtn.addEventListener("click", function () {
    toggleText(13);
});
GameSetupBtn.addEventListener("click", function () {
    toggleText(14);
});
TileCombinationsBtn.addEventListener("click", function () {
    toggleText(15);
});
SpecialTilesBtn.addEventListener("click", function () {
    toggleText(16);
});
GameplayBtn.addEventListener("click", function () {
    toggleText(17);
});
WinningBtn.addEventListener("click", function () {
    toggleText(18);
});
ScoringBtn.addEventListener("click", function () {
    toggleText(19);
});
PaymentRulesBtn.addEventListener("click", function () {
    toggleText(20);
});
EtiquetteBtn.addEventListener("click", function () {
    toggleText(21);
});

//Quiz Page

StartQuizBtn.addEventListener("click", function () {
    show(6);
    headerBtn.classList.add("inQuiz");
    startQuiz();
});

//Minigame Page
startgameBtn.addEventListener("click", function () {
    startGame();
    headerBtn.classList.add("inQuiz");
    show(7);
});

GameObjectiveBtn.addEventListener("click", function () {
    toggleText(22);
});

ControlsBtn.addEventListener("click", function () {
    toggleText(23);
});

CreditsBtn.addEventListener("click", function () {
    toggleText(24);
});


hidealltext(alltext);
hideall(allpages);
show(0);


function toggleText(textno) {
    const textItem = document.querySelector("#text" + textno);
    const isShowing = textItem.classList.contains("textShow");


    if (!isShowing) {
        textItem.classList.add("textShow");
        textItem.style.display = "block";
        textItem.classList.add("down");
        setTimeout(function() {
            textItem.classList.remove("down");
        }, 600); // run after 1 sec (1000ms)
    } else {
        textItem.classList.add("up");
        setTimeout(function() {
            textItem.classList.remove("up");
             textItem.classList.remove("textShow");
            textItem.style.display = "none";
        }, 600); // run after 1 sec (1000ms)
       
    }
}

function hidealltext(_hiddentext){
    for(let item of _hiddentext){
        item.style.display = "none";
    }
}

function shuffleListsInSync(listA, listB, listC) {
    for (let i = listA.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listA[i], listA[j]] = [listA[j], listA[i]];
        [listB[i], listB[j]] = [listB[j], listB[i]];
        [listC[i], listC[j]] = [listC[j], listC[i]];
    }
    return [listA, listB, listC];
}

function shuffleInnerOptions(optionList) {
    for (let i = 0; i < optionList.length; i++) {
        for (let j = optionList[i].length - 1; j > 0; j--) {
            const k = Math.floor(Math.random() * (j + 1));
            [optionList[i][j], optionList[i][k]] = [optionList[i][k], optionList[i][j]];
        }
    }
    return optionList;
}

const quizList = [
        "Which of these tiles is a fake tile?", // From your original
        "What is a unique rule in Japanese Riichi Mahjong?",
        "Which of these is NOT a standard Wind tile in Cantonese Mahjong?",
        "What is the maximum fan count allowed in Singaporean Mahjong scoring?",
        "Which country was Mahjong first invented in?",
        "What does the Red Dora tile signify in Riichi Mahjong?",
        "Which tile is typically used to represent the 'White Dragon'?",
        "In Singaporean Mahjong, what combination scores the most points?",
        "Which of the following tiles is NOT a terminal tile?",
        "What major event popularized Mahjong in the United States in the 1920s?"
];
    
const quizOptions = [
        ["3 Bamboo", "2 Circles", "Red Dragon", "10 Bamboo"], // Original
        ["Riichi declaration", "Seven pairs win", "No Flower tiles", "East must win first"],
        ["East", "South", "North", "Central"],
        ["5 fan", "7 fan", "13 fan", "Unlimited"],
        ["Japan", "China", "Singapore", "Vietnam"],
        ["It's worth bonus points", "It cancels a win", "It's a discard tile", "It ends the round"],
        ["Blank tile", "Green tile", "Character tile", "Bamboo tile"],
        ["All Honors", "Pure Suit", "Full Flush with Flower Bonus", "Thirteen Orphans"],
        ["1 Dot", "9 Bamboo", "East Wind", "5 Circle"],
        ["Mahjong-themed Broadway show", "Release of the first Mahjong comic book", "Introduction by Chinese immigrants", "Marketing campaign by Abercrombie & Fitch"]
];

const correctAnswers = [
        "10 Bamboo", // Fake tile (original question)
        "Riichi declaration", // Unique rule in Japanese Riichi Mahjong
        "Central", // Not a Wind tile in Cantonese Mahjong
        "Unlimited", // Max fan count in Singaporean Mahjong
        "China", // Origin country of Mahjong
        "It's worth bonus points", // Red Dora tile in Riichi
        "Blank tile", // Represents White Dragon
        "Thirteen Orphans", // High-scoring combo in Singaporean Mahjong
        "East Wind", // Not a terminal tile
        "Marketing campaign by Abercrombie & Fitch" // Popularized Mahjong in USA
];

async function startQuiz(){//Asynchronous function, allows to use await
    var score = 0;
    
    document.getElementById("currentScore").textContent = "Score: " + score;
    var questionAnswered;

    const [newquizList, newquizOptions, newCorrectAnswers] = shuffleListsInSync(quizList, quizOptions, correctAnswers);
    const timer = document.querySelector("#timerBar");
    shuffleInnerOptions(newquizOptions);

    for (let i = 0; i < newquizList.length; i++) {
        timer.classList.remove("paused");
        timer.classList.remove("startTimer");  
        void timer.offsetWidth;
        timer.classList.add("startTimer");
        questionAnswered = false;
        canAnswerQn = true;
        document.getElementById("QnNumber").textContent = "Qn " + (i + 1);
        document.getElementById("Question").textContent = newquizList[i];

        for (let i = 1; i <= 4; i++) {
            document.getElementById("Option" + i).disabled = false;
        }

        await Promise.race([ //Race is used to allow 2 promises to 'race' to see which one is resolved first
            new Promise(resolve => {
                for (let y = 1; y <= 4; y++) {
                    document.getElementById("Option" + y).textContent = newquizOptions[i][y - 1];
                    document.getElementById("Option" + y).onclick = function () {
                    timer.classList.add("paused");
                    if (newquizOptions[i][y - 1] == newCorrectAnswers[i]) {
                        score++;
                        document.getElementById("currentScore").textContent = "Score: " + score;
                    }
                    resolve(); //Resolve on click
                    };
                    
                    }   
            }),
            new Promise(resolve => setTimeout(resolve, 5000)) //Resolve after 5 sec
        ]);
        
        
        for (let i = 1; i <= 4; i++) {
            document.getElementById("Option" + i).disabled = true;
        }

        for (let y = 1; y <= 4; y++) {
            document.getElementById("Option" + y).textContent = newquizOptions[i][y - 1];
            const currentOption = document.getElementById("Option" + y);
            if (newquizOptions[i][y - 1] == newCorrectAnswers[i]) {
                currentOption.classList.add("correctOption");
            }else{
                currentOption.classList.add("wrongOption");
            }
        };

        await new Promise(resolve => setTimeout(resolve, 1000));

        for (let y = 1; y <= 4; y++) {
            document.getElementById("Option" + y).textContent = newquizOptions[i][y - 1];
            const currentOption = document.getElementById("Option" + y);
            if (newquizOptions[i][y - 1] == newCorrectAnswers[i]) {
                currentOption.classList.remove("correctOption");
            }else{
                currentOption.classList.remove("wrongOption");
            }
        };

    }
    headerBtn.classList.remove("inQuiz");
    show(4);
    document.getElementById("scoreDisplay").textContent = "You got a score of: " + score;
}

const clickedTiles = [];
var chiCounter;
var pongCounter;
var gameOngoing;
let tilespawn;

function createFallingImage() {
    if(gameOngoing == false){
        document.getElementById("ChiCounter").textContent = "You got Chi " + chiCounter + " times!";
        document.getElementById("PongCounter").textContent = "You got Pong " + pongCounter + " times!";
        clearInterval(tilespawn);
        headerBtn.classList.remove("inQuiz");
        show(5);
    }

    const minigame = document.querySelector(".minigame");
    const randomX = Math.random() * 90;

    const img = document.createElement("img");
    img.style.position = "absolute";
    img.style.left = `${randomX}%`;
    const randomImage = Math.floor(Math.random() * 9) + 1;
    img.src = "Images/" + randomImage + "circle.png";
    img.classList.add("fallable");

    img.addEventListener("click", function () {
        clickedTiles.push(randomImage);
        const emptyTile = document.getElementById("emptyTile" + clickedTiles.length);
        emptyTile.src = img.src;
        emptyTile.classList.add("selectedTile");
        if(clickedTiles.length == 3){
            if(checkChi(clickedTiles) == true){
                document.getElementById("gameText").textContent = "CHI";
                chiCounter++;
                chiAudio.play(); //play the audio!
            }
            else if(checkPong(clickedTiles) == true){
                document.getElementById("gameText").textContent = "PONG";
                pongCounter++;
                pongAudio.play(); //play the audio!
            }else{
                document.getElementById("gameText").textContent = "????";
                gameOngoing = false;
            }

            for (let i = 1; i < 4; i++) {
                const emptyTile = document.getElementById("emptyTile" + i);
                emptyTile.src = "";
                emptyTile.classList.remove("selectedTile");
            }

            clickedTiles.length = 0;
            

            setTimeout(() => {document.getElementById("gameText").textContent = "";}, 1000);

        }
        img.remove();
    })

    minigame.appendChild(img);
}

function checkPong(tilesLst){
    for (let i = 0; i < 2; i++) {
        if((tilesLst[i]) != tilesLst[i + 1]){
            console.log(i);
            console.log(tilesLst[i]);
            console.log(tilesLst[i + 1]);
            return false
        }
    }
    return true;
}

function checkChi(tilesLst){
    tilesLst.sort();
    for (let i = 0; i < 2; i++) {
        if((tilesLst[i] + 1) != tilesLst[i + 1]){
            console.log(i);
            console.log(tilesLst[i] + 1);
            console.log(tilesLst[i + 1]);
            return false
        }
    }
    return true;
}

function startGame() {
    chiCounter = 0;
    pongCounter = 0;
    gameOngoing = true;
    tilespawn = setInterval(createFallingImage, 1000);
}

const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() { //must be called by user generated event
if (document.documentElement.requestFullscreen) {
document.documentElement.requestFullscreen();
} else if (document.documentElement.mozRequestFullScreen) { // Firefox
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
document.documentElement.webkitRequestFullscreen();
} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
document.documentElement.msRequestFullscreen();
}
}
function exitFullscreen() {
if (document.exitFullscreen) {
document.exitFullscreen();
} else if (document.mozCancelFullScreen) { // Firefox
document.mozCancelFullScreen();
} else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
document.webkitExitFullscreen();
} else if (document.msExitFullscreen) { // IE/Edge
document.msExitFullscreen();
}
}