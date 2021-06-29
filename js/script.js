const squares = document.querySelectorAll('.square');
//const squares = $('.square');
//console.log(squares, squaresv)
const hit = document.querySelector('.hit');
//const hit = $('.hit');
const timeLeft = document.querySelector('#time-left');
//const timeLeft= $('.time-left');
const score = document.querySelector('#score');
//const score = $('.score');

let result = 0;
let hitPosition;
let currentTime = 30;
let timerId = null;
let countDownTimerId;

function randomSquare() {
    squares.forEach(square=> {
        square.classList.remove('hit');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('hit');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }

    })
})

function moveHit() {
    timerId = setInterval(randomSquare, 500);
}

//moveHit();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId)
        alert('GAME OVER your final Scores is: ' +result);

    }
}


function startGame() {
    console.log("Hello")
    score.textContent = 0;
    //timerId = null;
    result = 0;
    moveHit();
   // setTimeout(() => timerId = true, 15000) //show random  for 15 seconds
    countDownTimerId = setInterval( countDown, 500 );
}


//startGame();