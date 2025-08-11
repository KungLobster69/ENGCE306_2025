const num01 = document.getElementById("num1");
const num02 = document.getElementById("num2");
const aa = document.getElementById("a");
const ss = document.getElementById("s");
const mm = document.getElementById("m");
const dd = document.getElementById("d");
const resultMe = document.getElementById("result")

function getnum0102(){
    const num111 = parseFloat(num01.value) || 0;
    const num222 = parseFloat(num02.value) || 0;
    return {num111,num222};
}

aa.addEventListener('click',() => {
    const { num111 , num222 } = getnum0102();
    resultMe.textContent = num111+num222;
});

ss.addEventListener('click',() => {
    const {num111,num222} = getnum0102();
    resultMe.textContent = num111-num222;
});

mm.addEventListener('click',() => {
    const {num111,num222} = getnum0102();
    resultMe.textContent = num111*num222;
});

dd.addEventListener('click',() => {
    const {num111,num222} = getnum0102();
    if(num222 === 0){
        resultMe.textContent = "Can't do it"        
    }else{
        resultMe.textContent = (num111 / num222).toFixed(2);;
    }
    
});