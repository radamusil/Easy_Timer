let counter = 0;

const stop_button = document.querySelector('#stop-btn');
const start_button = document.querySelector('#start-btn');
const reset_button = document.querySelector('#reset-btn')
const timer = document.querySelector('#time');

let run = -1;
let timerID = 0;

const start = () => {
    if (run === -1) {
        timerID = setInterval(() => {
            counter += 1;
            timer.textContent = 'Time: ' + counter;
            run = 1;
            console.log('run');
         }, 1000);
    } else {

    }
}



const stop = () => {
    if (run === 1) {
        clearInterval(timerID);
        timer.textContent = 'Time stopped at: ' + counter;
        run = -1;
    } else {

    }
}

const reset = () => {
    counter = 0;
    timer.textContent = 'Time: ' + counter;
}

stop_button.addEventListener("click", stop);
start_button.addEventListener("click", start);
reset_button.addEventListener("click", reset);
