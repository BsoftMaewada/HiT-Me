/** HiT-ME **/

//selecting all the squares 
const squares = document.querySelectorAll('.square');
//const squares = $('.square');
//console.log(squares, squaresv)

// select the venoms elements
const venom = document.querySelector('.venom');
//const venom = $('.venom');

// selecting and searching elements with an Id time-left
const timeLeft = document.querySelector('#time-left');
//const timeLeft= $('.time-left');

// selecting and searching elements with an Id score
const score = document.querySelector('#score');
//const score = $('.score');

//initializingthe result at zero
let result = 0;
let venomPosition;
let currentTime = 30;
let timerId = null;
let countDownTimerId;

// getting the ramdon square to put our venom
function randomSquare() {

//for each square in our square array
    squares.forEach(square=> {
// for each square we are removing the venom if it exist in square
        square.classList.remove('venom');
    });

    // a venom randomly using Math.random  number from zero to eight
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('venom');

    // getting the random square ids
    venomPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == venomPosition){
            result++;

            //adding a score 
            score.textContent = result;
            //saving it to venomPosition
            venomPosition = null;
        }

    })
})

function moveVenom() {
    timerId = setInterval(randomSquare, 1000); //show random  for 10 seconds
}

//moveVenom();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId)
        alert('GAME OVER! your final Scores is: ' +result);

    }
}

// start game button function 
function startGame() {
    //console.log("Hello")

    //initializing score to zero
    score.textContent = 0;
    //timerId = null;

    //initializing result to zero
    result = 0;
    moveVenom();
    //setTimeout(() => timerId = true, 15000) 

    //setting the timer to count down speed to 10secs 
    countDownTimerId = setInterval( countDown, 1000 );
}


//startGame();