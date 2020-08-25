var today = new Date();
var hourNow = new.getHours();

var greeting;

if(hourNow > 18){

    greeting = 'Good Evening ';

}

else if (hourNow > 12) {

    greeting = 'Good afterNoon ';
}

else if (hourNow > 0) {

    greeting = 'Good Morning ';
}
else {

    greeting = 'Weclome  ';
}


document.write('<h3>' + greeting +'</h3>' );