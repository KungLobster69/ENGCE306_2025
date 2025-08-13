const num1input = document.getElementById("num1");
const num2input = document.getElementById("num2");
const addBtn = document.getElementById("add-btn");
const subBtn = document.getElementById("subtract-btn");
const mulBtn = document.getElementById("multiply-btn");
const divideBtn = document.getElementById("divide-btn");
const eq = document.getElementById("eq");

function getNumber() {
    const num1 = parseFloat(num1input.value) || 0;
    const num2 = parseFloat(num2input.value) || 0;
    return { num1, num2 };
}

addBtn.addEventListener('click', () => {
    const { num1, num2 } = getNumber();
    eq.textContent = num1 + num2;
});

subBtn.addEventListener('click', () => {
    const { num1, num2 } = getNumber();
    eq.textContent = num1 - num2;
});

mulBtn.addEventListener('click', () => {
    const { num1, num2 } = getNumber();
    eq.textContent = num1 * num2;
});

divideBtn.addEventListener('click', () => {
    const { num1, num2 } = getNumber();
    if (num2 === 0) {
        eq.textContent = 'หารด้วย 0 ไม่ได้';
    } else {
        eq.textContent = (num1 / num2).toFixed(5);
    }
});

