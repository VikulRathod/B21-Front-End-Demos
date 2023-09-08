var today = new Date();
document.write(`current datetime : ${today} <br/>`);

var y = today.getFullYear();
document.write(`year : ${y} <br/>`);

var m = today.getMonth();
document.write(`month : ${m + 1} <br/>`);

var months = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.write(`month name : ${months[m]} <br/>`);

var d = today.getDate();
document.write(`date : ${d} <br/>`);

var day = today.getDay();
document.write(`day : ${day} <br/>`);

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.write(`Day name : ${days[day]}<br/>`);

var offset = today.getTimezoneOffset();
document.write(`offset : ${offset} <br/>`);

var date = today.toDateString();
document.write(`date : ${date} <br/>`);


var result = formattedDate(today);
document.write(`Date : ${result} <br/>`);


function formattedDate(inputDate) {
    var y1 = inputDate.getFullYear();
    var m1 = inputDate.getMonth() + 1;
    var d1 = inputDate.getDate();

    if (d1 < 10)
        d1 = '0' + d1;
    if (m1 < 10)
        m1 = '0' + m1;

    // return d1 + '/' + m1 + '/' + y1; 
    return `${d1}/${m1}/${y1}`;
}

var userMachineDateFormat = today.toLocaleDateString('zh-CN');
document.write(`user machine date format : ${userMachineDateFormat} <br/>`);

var dob = new Date('09/16/1990');
var y2 = dob.getFullYear();
document.write(`${dob} => year : ${y2} <br/>`);

// var age = today - dob;
// document.write(`age : ${age} <br/>`);

var yearDiff = y - y2;

var m2 = dob.getMonth();
if (m2 > m) {
    yearDiff = yearDiff - 1;
    m += 12;
}

var monthDiff = m - m2;

var d2 = dob.getDate();
if (d2 > d) {
    monthDiff = monthDiff - 1;
    d += 30;
}

var dayDiff = d - d2;

document.write(`age : ${yearDiff} years ${monthDiff} months ${dayDiff} days <br/>`);




