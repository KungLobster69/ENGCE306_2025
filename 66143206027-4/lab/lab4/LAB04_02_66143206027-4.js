const num1In = document.getElementById("num1");
const num2In = document.getElementById("num2");
const add = document.getElementById("add-btn");
const sub = document.getElementById("sub-btn");
const multi = document.getElementById("multi-btn");
const divide = document.getElementById("divide-btn");
const result1 = document.getElementById("result")


function getnumber(){
    const num1 = parseFloat (num1In.value) || 0;
    const num2 = parseFloat (num2In.value) || 0;
    return {num1, num2};
};

add.addEventListener('click',  () => {
    const {num1, num2}= getnumber();
    result1.textContent = num1 + num2; 
}); 

sub.addEventListener('click', () => {
    const {num1, num2} = getnumber();
    result1.textContent = num1 - num2;
})

multi.addEventListener('click', () => {
    const {num1, num2} = getnumber();
    result1.textContent = num1 * num2;
})

divide.addEventListener('click', () => {
    const {num1, num2} = getnumber();

    if (num1,num2 === 0) {
    result1.textContent = "หารด้วย0ไม่ได้"; 
    }
    else {
    result1.textContent = num1 / num2;
    }
})


