const messageinput = document.getElementById("message-input");
const charCounSpan = document.getElementById("char-count");

const maxlength = 150;

messageinput.addEventListener('input',()=>{
    const text = messageinput.value.length;
    charCounSpan.textContent = text;

    if (text > 130) {
        charCounSpan.style.color = 'red';
        
    } else {
        charCounSpan.style.color = 'black';
    }
});