// var a = 'global variable';
const a = 'global variable';
// a = 'global variable updated';

document.write(`outside functions : ${a} <br/>`);
// document.write(`outside functions : b : ${b} <br/>`); 

function f1(){
    // var b = 'f1() local variable';
    b = 'f1() local variable'; // declared without var keyword => global variable
    document.write(`f1() : ${a} <br/>`);
    document.write(`f1() : b : ${b} <br/>`);
    if(true){
        // var c = 'if block declared variable';
        let c = 'if block declared variable';
        document.write(`if block : c : ${c} <br/>`);
    }
    // document.write(`f1() : c : ${c} <br/>`); // not accessible due to block scope variable
}

f1();

function f2(){
    document.write(`f2() : ${a} <br/>`);
    document.write(`f2() : b : ${b} <br/>`);
}

f2();

document.write(`outside functions : b : ${b} <br/>`);

function f3(){
    // var d = 10;
    document.write(`f3() : d : ${d} <br/>`);
    var d = 10;
}
f3();

// var x = 10, y = 10;
var x, y;
if(x == y){
    document.write(`equal <br/>`);
} else{
    document.write(`not equal <br/>`);
}

// var z = 10;
var z;
if(z){
    document.write(`if block <br/>`);
} else{
    document.write(`else block <br/>`);
}