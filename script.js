let countValue = document.querySelector('#countValue');
let decrease = document.querySelector('#decrease');
let increase = document.querySelector('#increase');
let reset = document.querySelector('#reset');

const increaseFunction = () => {
    let val = Number(countValue.innerHTML);
    val += 1;

    countValue.innerHTML = val;
}

const decreaseFunction = () => {
    let val = Number(countValue.innerHTML);
    val -= 1;

    countValue.innerHTML = val;
}

const resetFunction = () => {
    countValue.innerHTML = 0;
}

increase.addEventListener('click', increaseFunction);
decrease.addEventListener('click', decreaseFunction);
reset.addEventListener('click', resetFunction);



