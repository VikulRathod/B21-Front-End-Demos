// alert('index.js file loaded');

var v1 = 10;
// alert(v1);

// console.log(v1);
// console.warn('warning message');
// console.error('error messages');

// document.write(v1 + '<br/>');
// document.write('<a href="http://www.google.com">Visit Google</a>');

var output = document.getElementById('output');

output.value = v1 + '   ' + typeof v1;
v1 = 'vishal';
output.value += '\n' + v1 + '   ' + typeof v1;

var v2 = 456.123;
output.value += '\n' + v2 + '   ' + typeof v2;

var v3 = true;
output.value += '\n' + v3 + '   ' + typeof v3;

var v4 = 'vishal'; // value within single quote
output.value += '\n' + v4 + '   ' + typeof v4;

var v5 = "pawar"; // value within double quote
output.value += '\n' + v5 + '   ' + typeof v5;

v4 = '"vishal"';
output.value += '\n' + v4 + '   ' + typeof v4;

v4 = "'vishal'";
output.value += '\n' + v4 + '   ' + typeof v4;

v4 = "\"vishal\"";
output.value += '\n' + v4 + '   ' + typeof v4;

v4 = "Name : vishal pawar \nAddress: Katraj, Pune";
output.value += '\n' + v4 + '   ' + typeof v4;

var firstName = 'vishal';
var lastName = 'pawar';
// var fullName = 'Full Name : ' + firstName + ' ' + lastName;
// var fullName = `Full Name : ${firstName} ${lastName}`;
var fullName = `Full Name : ${lastName}, ${firstName}`;
output.value += '\n' + fullName;

var ename = 'Vishal';
var length = ename.length;
output.value += `\nNumber of characters : ${length}`;

output.value += `\nName in upper case : ${ename.toUpperCase()}`;
output.value += `\nName in lower case : ${ename.toLowerCase()}`;

var r1 = firstName.concat(' ', lastName);
output.value += `\n${r1}`;

var x = '       atul      ';
var y = 'rathod';
output.value += `\nFull Name: ${x.trim()} ${y}`;

const site = 'http://www.google.com';
var r2 = site.replace('google', 'VHaaSh');
output.value += `\nOriginal : ${site} Converted : ${r2}`;

