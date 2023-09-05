// normal function
function printA() {
    document.write(`printA() function called <br/>`);
}

printA();

var printB = function () {
    document.write(`anonymous function called <br/>`);
}

printB();

// printC('vishal'); // function hoisting will not work for anonymous function

var printC = function (name) {
    document.write(`welcome, ${name} <br/>`);
}

printC('vishal');

var printD = function printE() {
    document.write(`printD() function called <br/>`);
}

printD();
// printE(); // error

var fact = function factorial(num) {
    if (num == 1) {
        return 1;
    }

    return num * factorial(num - 1);
}

// factorial(5); // error
result = fact(10);
document.write(`10 factorial is : ${result} <br/>`);

var fact1 = (function factorial1(num) {
    if (num == 1) {
        return 1;
    }

    return num * factorial1(num - 1);
})(10);
result = fact1;
document.write(`10 factorial is : ${result} <br/>`);

var printF = () => document.write(`arrow function called <br/>`);

printF();

var fullName = (fn, ln) => fn + ' ' + ln;
result = fullName('vishal', 'pawar'); 
document.write(`full name :  ${result}`);