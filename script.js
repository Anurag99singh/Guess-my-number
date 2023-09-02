// 'use strict';
let rn;
let x;
let score = 20;
let diff = 0;
let previousehighscore = 0;
let mess = (document.querySelector('.message'));
let bt = (document.querySelector('.btn.check'));
let box = (document.querySelector('.guess'));
let body = document.querySelector('body');
let highscore = document.querySelector('.highscore');
let againbtn = document.querySelector('.btn.again');


let event=bt.addEventListener('click', function () {
    x = Number(box.value);
    if (x === rn) {
        mess.innerHTML = `🏆Correct score!!`;
        body.style.backgroundColor = 'green';
        if (score > previousehighscore) {
            previousehighscore = highscore.innerHTML = score;
        }
        agianbtfunction();
    //    bt.removeEventListener('click');
    }
    else {
        if(score===0)
        {
            mess.innerHTML = `Let's Begin again!!! You have made too many attempts ✌️🤞`;
            score = 20
            box.value = '';
            body.style.backgroundColor = '#222';
            randomnumber();
        }else
        {
         diff = Math.abs(x - rn);
        scorecheck(diff);
        scoredecrease();
        }
       
    }
})

let scorecheck = function () {
    if (diff <= 5) {
        mess.innerHTML = `Too close!!`;
    }
    else {
        mess.innerHTML = `Guess between 1 to 20 `;
    }
}

let scoredecrease = function () {
    score -= 1;
    (document.querySelector('.score').textContent = score);
}
function randomnumber() {
    rn = Math.floor(Math.random() * 20);
    // console.log(rn);
    return rn;
}

let agianbtfunction = function () {
    againbtn.addEventListener('click', function () {
        document.querySelector('.score').textContent = 20;
        mess.innerHTML = `Let's Begin again!!! ✌️🤞`;
        score = 20
        box.value = '';
        body.style.backgroundColor = '#222';
         randomnumber();
    });
}
randomnumber();




