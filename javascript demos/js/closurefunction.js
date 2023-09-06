f1(); // calling function before its declaration - possible (?function hoisting)

function f1() {
    document.write(`f1() called <br/>`);
}

// f2(); // function hoisting not supported

var f2 = function () {
    document.write(`f2() called <br/>`);
}

f2();

var f3 = () => {
    document.write(`f3() called <br/>`);
}

f3();

function outer() {
    document.write(`outer function called <br/>`);
    function inner() {
        return `inner function called <br/>`;
    }

    function inner1(){
        return `inner1 function called <br/>`;
    }
    // return inner();
    return inner;
}

var result = outer()();
document.write(result);

result = multiply(2, 3, 4);
document.write(`multiply(2,3,4) : ${result} <br/>`); // 24

function multiply(a, b, c) {
    return a * b * c;
}

result = multiply2(2)(3)(4);
document.write(`multiply(2)(3)(4) : ${result} <br/>`); // 24

function multiply2(a) {
    function multiplya(b) {
        function multiplyb(c) {
            return a * b * c;
        }
        return multiplyb;
    }
    return multiplya;
}

