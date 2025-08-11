const open1 = document.getElementById("open-modal-btn");
const close1 = document.getElementById("close-modal-btn");
const Modal1 = document.getElementById("modal-container");

open1.addEventListener('click',()=>{
    Modal1.classList.add('show');
});

close1.addEventListener('click',()=>{
    Modal1.classList.remove('show');
});