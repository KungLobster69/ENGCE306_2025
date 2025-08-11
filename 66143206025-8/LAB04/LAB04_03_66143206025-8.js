const messageInput = document.getElementById("message-input");
const charCountSpan = document.getElementById("char-count");

const MAX = 150;

messageInput.addEventListener('input', () => {
    const current = messageInput.value.length;

    charCountSpan.textContent = current;

    if(current > 100){
        charCountSpan.style.color = '#ff000f';
        messageInput.style.backgroundColor = '#654321';
    }else{
        charCountSpan.style.color = '#ff0fff';
        messageInput.style.backgroundColor = '#ffffff';
    }
});