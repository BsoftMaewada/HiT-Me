/** HiT-ME **/

//selecting all the squares 
const squares = document.querySelectorAll('.square');
//const squares = $('.square');
//console.log(squares, squaresv)

// selecting  the elements with a class of venom
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
// for each square we are removing the venom if it exist in any of the squares
        square.classList.remove('venom');
    });

    /* Adding a venom randomly */

    // getting venom randomly using Math.random square from zero to eight

    //The Math.floor() function returns the largest integer less than or equal to a given number.

    //The Math.random() function returns a floating-point, pseudo-random 
    //number in the range 0 to less than 1 (inclusive of 0, but not 1.

    let randomSquare = squares[Math.floor(Math.random() * 9)];

    //console.log(randomSquare)
    //console.log(Math.floor(Math.random() * 9))
    randomSquare.classList.add('venom');

    // getting the id of the random square and 
    //saving it to venomPosition
    venomPosition = randomSquare.id;
}

/** hitting the venom **/

//getting a point for each time we hit the venom
squares.forEach(square => {

    //adding an event listener to listen out if we put 
    //mouse down for each time we click on the square.
    square.addEventListener('mousedown', () => {

        // what to happen is we click on the square
        if (square.id == venomPosition){

            //getting the result and adding one to the result
            result++;

            //display the result in our score 
            score.textContent = result;

            //clear out venomPosition
            venomPosition = null;
        }

    })
})

/** Timer function **/

function moveVenom() {
    //setting interval to move the venom randomly  for 5 seconds
    timerId = setInterval(randomSquare, 500); 
}

//moveVenom();

/**  **/
function countDown() {
    //count down timer
    currentTime--

    //display the current time 
    timeLeft.textContent = currentTime;
    //console.log('Hello')

    if (currentTime == 0) {
        //console.log('current time')
        clearInterval(countDownTimerId);
        
        //clear timerId
        clearInterval(timerId)
        alert('GAME OVER! your final Scores is: ' +result);
        currentTime = 30;
    }
}

// start game button function 
function startGame() {
    //console.log("Hello")

    clearInterval(countDownTimerId);

    clearInterval(timerId);
    
    currentTime = 30;

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