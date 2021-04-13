const startButton = document.createElement('button');
startButton.id = 'startButton';

const redCircle = document.createElement('div');
// redCircle.id = 'redCircle';
redCircle.style.backgroundColor = '#ff0000';
redCircle.classList = 'circle';

const blueCircle = document.createElement('div');
// blueCircle.id = 'blueCircle';
blueCircle.style.backgroundColor = '#0000ff';
blueCircle.classList = 'circle';

let circleArray = [redCircle, blueCircle]

const decider = document.createElement('div');
decider.id = 'decider';

score.innerText = 0;

addEventListener('load', () => {
    document.getElementById('viewport').appendChild(startButton);
})

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

startButton.addEventListener('click', () => {
    document.getElementById('viewport').removeChild(startButton);
    document.getElementById('viewport').appendChild(decider);
    document.getElementById('viewport').appendChild(redCircle);
    document.getElementById('viewport').appendChild(blueCircle);
    document.getElementById('viewport').appendChild(score);
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

correctClick = () => {
    redCircle.addEventListener('click', () => {
        if (decider.style.backgroundColor === redCircle.style.backgroundColor) {
            score.innerText++;
            viewport.style.backgroundColor = '#008800';
            setTimeout(() => {
                viewport.style.backgroundColor = '#222'
            }, 500)
        }
        else {
            score.innerText--;
            viewport.style.backgroundColor = '#880000';
            setTimeout(() => {
                viewport.style.backgroundColor = '#222'
            }, 500)
        }
        deciderColor();
    })
    blueCircle.addEventListener('click', () => {
        if (decider.style.backgroundColor === blueCircle.style.backgroundColor) {
            score.innerText++;
            viewport.style.backgroundColor = '#008800';
            setTimeout(() => {
                viewport.style.backgroundColor = '#222'
            }, 500)
        }
        else {
            score.innerText--;
            viewport.style.backgroundColor = '#880000';
            setTimeout(() => {
                viewport.style.backgroundColor = '#222'
            }, 500)
        }
        deciderColor();
    })
}

correctClick();