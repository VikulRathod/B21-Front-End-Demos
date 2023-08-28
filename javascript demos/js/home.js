// var location;
// window.navigator.geolocation.getCurrentPosition(function (data) {
//     location = data;
// });

function btnClick() {
    // console.log(location);

    // alert('You clicked on button');
    document.getElementById('btn1').innerText = "Processing..";

    document.getElementById('btn2').style.display = 'inline';
    document.getElementById('btn2').style.color = 'white';
    document.getElementById('btn2').style.backgroundColor = 'red';
}