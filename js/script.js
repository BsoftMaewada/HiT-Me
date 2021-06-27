const squares = document.querySelectorAll('.square');
const hit = document.querySelector('.hit');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

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
    timerId = setInterval(randomSquare, 1000);
}

moveHit();


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId)
        alert('GAME OVER your scores is: ' +result);

    }
}

let countDownTimerId = setInterval( countDown, 1000 );