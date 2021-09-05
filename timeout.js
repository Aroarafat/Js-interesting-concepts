function doSomething() {
    console.log('I am coding JavaScript');
}
console.log('First: ami sobar age');
console.log('Second: I am the second person');
// setTimeout(doSomething, 6000);
// 6000 bolte 6 second bojhano hoise 
// sudhu 6 dile seyta 6milisecond
setTimeout(function () {
    console.log('I am using VS Code');
}, 5000);
setTimeout(() => {
    console.log('Exploring MDN articles');
}, 4000);
console.log('Third: ami 3 number baccha');
console.log('Fourth: ami ek hali purno korsi');