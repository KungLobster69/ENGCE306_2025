const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];
const btn = document.getElementById("color-btn");
const body = document.body;

function getRandomNumber  () {
    return Math.floor(Math.random() * colors.length);
}
btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    body.style.backgroundColor = colors[randomNumber];
});                 
                                             