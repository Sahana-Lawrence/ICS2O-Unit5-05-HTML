// JavaScript File

document.getElementById("submitguess").onclick = function() {
var age = document.getElementById("age");
var day = document.getElementById("day");
var agevalue = age.value;
var dayvalue = day.value;

 if ((age.value < 18) && (day.value == "Monday" || day.value == "Tuesday" || day.value == "Wednesday" || day.value == "Thursday" || day.value == "Friday")) {
   alert("Time for School!");
}
else if ((age.value >= 18) && (day.value == "Monday" || day.value == "Tuesday" || day.value == "Wednesday" || day.value == "Thursday" || day.value == "Friday")) {
   alert("Time to go to work!");
}
 else {
  alert("Time to relax for the weekend!");
}
};