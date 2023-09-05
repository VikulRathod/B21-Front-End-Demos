function print() {
    document.write(`print() function called <br/>`);
}

print(); // function call

var result = print();
document.write(`print() function returned value : ${result} <br/>`);

function printA() {
    return 'printA function called';
}

result = printA();
document.write(`printA() returned : ${result} <br/>`);

function printB() {
    return 10;
}
result = printB();
document.write(`printB() returned : ${result}<br/>`);

function printC() {
    return;
    document.write(`printC() function line <br/>`);
}

printC();

function printD(a, b) {
    document.write(`printD(a,b) called : ${a + b} <br/>`);
}

printD(); // NaN
printD(10, 10);
printD('vishal', 'pawar');
printD(10, 10, 10);
printD('vishal', 10);

printE(10, 20, 30, 40, 50); // function call before its declaration

function printE(a, b) {
    document.write(`printE(a,b) called : ${a + b} <br/>`);
    document.write(`number of arguments passed : ${arguments.length} <br/>`);
    for(var a of arguments){
        document.write(`${a}\t`);
    }
}

// printE(10, 20, 30, 40, 50);