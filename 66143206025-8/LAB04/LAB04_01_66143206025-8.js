const colors = ["red","green","blue","#FFFFFF","#000000"];

const btn = document.getElementById('color-btn');
const body = document.body;

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click',()=>{
    const randomIndex = getRandomNumber();

    body.style.backgroundColor = colors[randomIndex];
});