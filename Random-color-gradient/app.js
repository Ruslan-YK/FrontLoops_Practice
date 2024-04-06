const body = document.querySelector('body');
const btn = document.querySelector('.container');
const colorText = document.querySelector('.color-text');

// values
const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
];

// getGradient

function getGradient() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.trunc(Math.random() * values.length);
        color += values[randomNumber];
    }
    return color;
}

// setGradient
function setGradient() {
    const color1 = getGradient();
    const color2 = getGradient();
    const randomDeg = Math.trunc(Math.random() * 360);
    const bgColor = `linear-gradient(
        ${randomDeg}deg,
        ${color1},
        ${color2}
    )`;

    body.style.background = bgColor;
    colorText.textContent = bgColor;
}
setGradient();

btn.addEventListener('click', setGradient);
