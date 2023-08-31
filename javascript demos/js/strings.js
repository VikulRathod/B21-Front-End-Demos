var email = 'vishal@gmail.com';
console.log(`input email : ${email}`);

var result = email.substring(0, 5);
console.log(`email.substring(0, 5) : ${result}`);

result = email.slice(0, 5);
console.log(`email.slice(0, 5) : ${result}`);

result = email.substr(0, 5);
console.log(`email.substr(0, 5) : ${result}`);

result = email.substring(5, 2);
console.log(`email.substring(5,2) : ${result}`);

result = email.slice(5, 2);
console.log(`email.slice(5, 2) : ${result}`);

result = email.substr(5, 2);
console.log(`email.substr(5, 2) : ${result}`);

result = email.indexOf('@');
console.log(`email.indexOf('@') : ${result}`);

result = email.indexOf('l');
console.log(`email.indexOf('l') : ${result}`);
result = email.lastIndexOf('l');
console.log(`email.lastIndexOf('l') : ${result}`);


function process() {
    var email = document.getElementById('email').value;

    var index = email.indexOf('@');
    var username = email.substring(0, index);
    var domain = email.substring(index + 1, email.length);

    document.getElementById('username').value = username;
    document.getElementById('domain').value = domain;
}

function clearValues() {
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('domain').value = '';
}

function domainName() {
    var site = document.getElementById('site').value;
    var index = site.lastIndexOf('.');
    var domain = site.substring(index + 1, site.length);
    document.getElementById('output').value = domain;
}