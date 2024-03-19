var currentDate = new Date();
var currentDay = currentDate.getDay();

// Define the day names
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Use a switch statement to display the current day
switch (currentDay) {
  case 0:
    console.log('Today is ' + dayNames[0]);
    break;
  case 1:
    console.log('Today is ' + dayNames[1]);
    break;
  case 2:
    console.log('Today is ' + dayNames[2]);
    break;
  case 3:
    console.log('Today is ' + dayNames[3]);
    break;
  case 4:
    console.log('Today is ' + dayNames[4]);
    break;
  case 5:
    console.log('Today is ' + dayNames[5]);
    break;
  case 6:
    console.log('Today is ' + dayNames[6]);
    break;
  default:
    console.log('Error: Invalid day');
    break;
}