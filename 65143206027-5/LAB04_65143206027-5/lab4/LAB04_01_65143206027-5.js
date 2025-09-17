const color = ["red","blue","yellow","pink","green","black","white","purple","orange"];
const btn = document.getElementById("color-btn");
const body = document.body;


function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
    
    }

    btn.addEventListener('click', () => {
        const randomIndex = getRandomNumber();
        body.style.backgroundColor = color[randomIndex];
        
    }
    )

