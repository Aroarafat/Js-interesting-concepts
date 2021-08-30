function welcomeMessage(name, greetHandler) {
    greetHandler(name);
}
// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise']
// const myObj = { name: 'Tom Chinku', age: 11 };
function greetMorning(name) {
    console.log('Good morning', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
function greetAfternoon(name) {
    console.log('Good afternoon', name);
}
welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Sakib Hanks', greetAfternoon);
welcomeMessage('Bappa Raj', greetEvening);

function handleClick() {
    console.log('button is clicked');
}

document.getElementById('my-btn').addEventListener('click', handleClick)

document.getElementById('btn').addEventListener('click', function () {
    console.log('buttn is clicked');
})


// QUIZ-PRACTICE-01

// let p = 'JavaScript';
// let q = p; p = 'React';
// console.log(q);

// QUIZ-PRACTICE-02

// const isTrue = 'false';

// if (!isTrue) {

//     console.log('hello');

// }

// else {
//     console.log('world');

// }

// QUIZ-PRACTICE-03
// function sum(p, q) {

//     console.log(p + q);

// }

// const result = sum(2, 3);

// console.log(result);


// QUIZ-PRACTICE-04

// if ('2' === 2) {

//     console.log('Inside if');

// }

// else {

//     console.log('Inside else');

// }

// QUIZ-PRACTICE-05

// function work(x, y = 4) {

//     return x + y;

// }

// console.log(work(32);
// 05 ER ANSWER SYNTAX ERROR