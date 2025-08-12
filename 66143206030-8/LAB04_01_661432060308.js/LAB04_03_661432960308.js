const messageinput = document.getElementById('message-input');
const charcountspan = document.getElementById('char-count');

messageinput.addEventListener('input', () => {
    const currentlength = messageinput.value.length;
    charcountspan.textContent = currentlength;

    if(currentlength > 130) {
        charcountspan.style.color = 'red';
    } else {
        charcountspan.style.color = 'black';
    }
})
