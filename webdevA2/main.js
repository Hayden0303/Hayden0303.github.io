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
});
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

//Make text fade in/out
function toggleText(textno) {
    const textItem = document.querySelector("#text" + textno);
    const isShowing = textItem.classList.contains("textShow");


    if (!isShowing) {//if text is not there
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


var quizList = [
    "Which of these tiles is a fake tile?",
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

var quizOptions = [
    ["3 Bamboo", "2 Circles", "Red Dragon", "10 Bamboo"],
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

var correctAnswers = [
    "10 Bamboo",
    "Riichi declaration",
    "Central",
    "Unlimited",
    "China",
    "It's worth bonus points",
    "Blank tile",
    "Thirteen Orphans",
    "East Wind",
    "Marketing campaign by Abercrombie & Fitch"
];

function shuffleListsInSync(listA, listB, listC) {
    for (var i = listA.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp;

        //Knuth Shuffle
        temp = listA[i]; listA[i] = listA[j]; listA[j] = temp;
        temp = listB[i]; listB[i] = listB[j]; listB[j] = temp;
        temp = listC[i]; listC[i] = listC[j]; listC[j] = temp;
    }
    return [listA, listB, listC];
}

function shuffleInnerOptions(optionList) {
    for (var i = 0; i < optionList.length; i++) {
        for (var j = optionList[i].length - 1; j > 0; j--) {
            var k = Math.floor(Math.random() * (j + 1));
            var temp = optionList[i][j];
            optionList[i][j] = optionList[i][k];
            optionList[i][k] = temp;
        }
    }
    return optionList;
}

function startQuiz() {
    var quizState = {
        score: 0,
        timeoutId: null
    };

    var i = 0;
    var timer = document.getElementById("timerBar");
    var scoreDisplay = document.getElementById("currentScore");
    var questionText = document.getElementById("Question");
    var questionNumber = document.getElementById("QnNumber");

    if (scoreDisplay) scoreDisplay.textContent = "Score: " + quizState.score;

    var shuffled = shuffleListsInSync(quizList.slice(), quizOptions.slice(), correctAnswers.slice());
    var newquizList = shuffled[0];
    var newquizOptions = shuffleInnerOptions(shuffled[1]);
    var newCorrectAnswers = shuffled[2];

    function showAnswerFeedback(questionIndex) {
        //Check for correct option
        for (var y = 1; y <= 4; y++) {
            var optionElem = document.getElementById("Option" + y);
            if (optionElem) {
                optionElem.textContent = newquizOptions[questionIndex][y - 1];
                if (newquizOptions[questionIndex][y - 1] === newCorrectAnswers[questionIndex]) {
                    optionElem.className = "correctOption";
                } else {
                    optionElem.className = "wrongOption";
                }
            }
        }

        setTimeout(function() {
            for (var y = 1; y <= 4; y++) {
                var optionElem = document.getElementById("Option" + y);
                if (optionElem) {
                    optionElem.className = "";
                }
            }
            i++;
            nextQuestion();
        }, 1000);
    }

    //Timer
    function resetTimerBar(questionIndex) {
        if (timer) {
            timer.className = "";
            void timer.offsetWidth;
            timer.className = "startTimer";
        }

        if (quizState.timeoutId !== null) {
            clearTimeout(quizState.timeoutId);
        }

        quizState.timeoutId = setTimeout(function() {
            showAnswerFeedback(questionIndex);
        }, 5000);
    }

    function nextQuestion() {
        if (i >= newquizList.length) {
            if (typeof headerBtn !== "undefined") {
                headerBtn.classList.remove("inQuiz");
            }
            if (typeof show === "function") {
                show(4);
            }
            var finalScore = document.getElementById("scoreDisplay");
            if (finalScore) finalScore.textContent = "You got a score of: " + quizState.score;
            return;
        }

        resetTimerBar(i);

        if (questionText) questionText.textContent = newquizList[i];
        if (questionNumber) questionNumber.textContent = "Qn " + (i + 1);

        for (var j = 1; j <= 4; j++) {
        (function(optIndex, questionIndex, options, answer, timerElem, scoreElem, scoreRef, showFeedbackFn) {
            var opt = document.getElementById("Option" + optIndex);
            if (opt) {
                //make buttons clickable and move on to next question
                opt.disabled = false;
                opt.textContent = options[optIndex - 1];
                opt.className = "";

                var clicked = false;
                //Check for click
                opt.onclick = function() {
                    if (clicked) return;
                    clicked = true;

                    if (timerElem) timerElem.classList.add("paused");

                    for (var k = 1; k <= 4; k++) {
                        var btn = document.getElementById("Option" + k);
                        if (btn) btn.disabled = true;
                    }

                    if (options[optIndex - 1] === answer) {
                        scoreRef.score++;
                        if (scoreElem) scoreElem.textContent = "Score: " + scoreRef.score;
                    }

                    if (scoreRef.timeoutId !== null) {
                        clearTimeout(scoreRef.timeoutId);
                        scoreRef.timeoutId = null;
                    }

                    showFeedbackFn(questionIndex);
                };
            }
        })(j, i, newquizOptions[i], newCorrectAnswers[i], timer, scoreDisplay, quizState, showAnswerFeedback);
    }
    }

    nextQuestion();
}

const clickedTiles = [];
var chiCounter;
var pongCounter;
var gameOngoing;
let tilespawn;

function createFallingImage() {

    const minigame = document.querySelector(".minigame");
    const randomX = Math.random() * 90;

    const img = document.createElement("img");
    img.style.position = "absolute";
    img.style.left = randomX + "%";//random percentage of the screen
    const randomImage = Math.floor(Math.random() * 9) + 1;
    img.src = "Images/" + randomImage + "circle.png";//get random img
    img.classList.add("fallable");
    img.addEventListener("animationend", () => {//check for animation end and removes img
        img.remove();
    });

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
                clearInterval(tilespawn);
                var tiles = document.querySelectorAll('.fallable');
                for (var i = 0; i < tiles.length; i++) {
                    tiles[i].parentNode.removeChild(tiles[i]);
                }
                document.getElementById("ChiCounter").textContent = "You got Chi " + chiCounter + " times!";
                document.getElementById("PongCounter").textContent = "You got Pong " + pongCounter + " times!";
                headerBtn.classList.remove("inQuiz");
                show(5);
            }

            for (let i = 1; i < 4; i++) {
                const emptyTile = document.getElementById("emptyTile" + i);
                emptyTile.src = "";
                emptyTile.classList.remove("selectedTile");
            }

            clickedTiles.length = 0;
            
        setTimeout(function() { document.getElementById("gameText").textContent = "";
        }, 1000);

        }
        img.remove();
    });

    minigame.appendChild(img);
}

function checkPong(tilesLst){
    for (let i = 0; i < 2; i++) {
        if((tilesLst[i]) != tilesLst[i + 1]){
            console.log(i);
            console.log(tilesLst[i]);
            console.log(tilesLst[i + 1]);
            return false;
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
            return false;
        }
    }
    return true;
}

function startGame() {
    chiCounter = 0;
    pongCounter = 0;
    gameOngoing = true;

    // Clear any leftover interval before starting a new one
    clearInterval(tilespawn); 

    tilespawn = setInterval(function () {
        if (gameOngoing) {
            createFallingImage();
        }
    }, 1000);
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