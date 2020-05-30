// JavaScript File

document.getElementById("submitguess").onclick = function() {
var age = document.getElementById("age");
var day = document.getElementById("day");
var agevalue = age.value;
var dayvalue = day.value;

 if ((age.value <= 11 && age.value >= 65) && (day.value == "Tuesday" || day.value == "Thursday" || day.value == "Saturday")) {
   alert("You can get into the museum!");
}
 else if ((age.value >= 12 && age.value <= 64) && (day.value == "Monday" || day.value == "Wednesday" || day.value == "Friday")) {
   alert("You can get into the museum!");
}
 else {
  alert("You cannot get into the museum!");
}
};