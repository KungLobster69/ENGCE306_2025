const colors = ["red", "blue", "green", "yellow", "purple", "rgb(255, 165, 0)"];
const btn = document.getElementById('Color-btn');
const body = document.body;

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', () => {
    const randomIndex = getRandomNumber();
    body.style.backgroundColor = colors[randomIndex];
});