const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const add = document.getElementById("add-btn");
const sub = document.getElementById("sub-btn");
const multi = document.getElementById("multi-btn");
const div = document.getElementById("div-btn");
const result1 = document.getElementById("result");

function getNumber(){
    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    return{num1, num2};
}   

add.addEventListener('click', () => {
   const {num1, num2} = getNumber();
   result1.textContent = num1 + num2;
});       

sub.addEventListener('click',() =>{
    const {num1, num2} = getNumber();
    result1.textContent = num1 - num2;
})

multi.addEventListener('click',() =>{
    const {num1, num2} = getNumber();
    result1.textContent = num1 * num2;
})

div.addEventListener('click', () => {
    const {num1, num2} = getNumber();

    if (num2 === 0) {
        result1.textContent = "หารด้วย 0 ไม่ได้";
    } else {
        const result = num1 / num2;
        result1.textContent = "ผลลัพธ์ของการหารคือ: " + result;
    }
});
