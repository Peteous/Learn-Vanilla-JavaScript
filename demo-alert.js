/*
I am in chapter 1 of a learn Javascript course.
This is very rudimentary code.
*/
var example = 100;

var print = "This is my first ever JavaScript!";

if(example != Null && print != Null){
	alert(print); // creates an alert box
}
else {
	document.write("Nards");
}

document.write(example);

example++;

alert(example == 100);

++example;
var conditionalOperator = (example <= 101) ? "Not Incremented": "Incremented";
document.write(conditionalOperator);