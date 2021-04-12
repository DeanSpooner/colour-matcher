const startButton = document.createElement('button');
startButton.id = 'startButton';

const redCircle = document.createElement('div');
redCircle.id = 'redCircle';
redCircle.classList = 'circle';

const blueCircle = document.createElement('div');
blueCircle.id = 'blueCircle';
blueCircle.classList = 'circle';

const decider = document.createElement('div');
decider.id = 'decider';

let scoreCount = 0;

const score = document.getElementById('score');
score.innerText = scoreCount;



circleArray = [redCircle, blueCircle];

addEventListener('load', () => {
    document.getElementById('viewport').appendChild(startButton);
})

startButton.addEventListener('click', () => {
    document.getElementById('viewport').removeChild(startButton);
    document.getElementById('viewport').appendChild(decider);
    document.getElementById('viewport').appendChild(redCircle);
    document.getElementById('viewport').appendChild(blueCircle);
    spinFunc(circleArray);
    deciderColor();
})

deciderColor = () => {
    let random = Math.random();
    if (random < 0.5) {
        decider.style.backgroundColor = '#ff0000'
    }
    if (random >= 0.5) {
        decider.style.backgroundColor = '#0000ff'
    }
}

spinFunc = (circleArray) => {
    for (let i = 0; i < circleArray.length; i++) {
        if (i % 2 === 0) {
            $(circleArray[i]).animate({ left: '20%' })
        }
        if (i % 2 === 1) {
            $(circleArray[i]).animate({ left: '80%' })
        }
    }
}

correctClick = (circleArray) => {
    for (let i = 0; i < circleArray.length; i++) {
        if (decider.style.backgroundColor === circleArray[i].style.backgroundColor) {
            scoreCount += 1;
        }
        if (decider.style.backgroundColor !== circleArray[i].style.backgroundColor) {
            scoreCount -= 1;
        }
    }
}