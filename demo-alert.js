/*
I am in chapter 1 of a learn Javascript course.
This is very rudimentary code.
*/
var example = (int) prompt("Please enter a number");

var print = "This is my first ever JavaScript!";

if(example != 0 && print != ""){
	alert(print); // creates an alert box
}
else {
	document.write("Nards");
}

example++;

alert(example == 100);

++example;
var conditionalOperator = (example <= 101) ? "Not Incremented": "Incremented";
document.write(conditionalOperator);

switch(example){
	case 100:
		document.write("100");
		break;
	case 101:
		document.write("101");
		break;
	default:
		example++
		break;
}

for (i=1; i<=5; i++) {
	if(i == 4){
		continue;
	} else if(i == 5){
		break;
	}
	else{
		document.write(example+i + "<br />");
	}
}

while(example > 100){
	document.write(example + "<br />");
	example--
}

do {
	document.write(example + "<br />");
	example++
} while(example <= 103)

function dialogue(message){
	alert((String)message);
}

dialogue("Functioned");