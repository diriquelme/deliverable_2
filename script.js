/*var weather = prompt("What is the Temperature Today?");
var eventType = ["casual", "semiformal", "formal"];
var clothingSuggestion = ["something comfy", "a polo", "a suit", "a coat", "a jacket", "no jacket"];*/

/*var weather = prompt("What is the Temperature Today?");

if (weather === "54") {
    alert("Wear a jacket!");
} else {
    alert("Wear no jacket")
}*/

/*
true && true == true
true && false == false
false && true == false
false && false == false

true || true == true
true || false == true
false || true == true
false || false == false

!true == false
!false == true
*/

var tempFahr = prompt("What is the temperature today?");
/*var tempFahr ="";*/

var eventType = prompt("What type of event are you going to?");
/*var eventType="";*/

var tempClothing = null; // this has no value yet
var eventClothing = ["something comfy","a polo","a suit"]; // this has no value yet
var firstItem = eventClothing[0];
var secondItem = eventClothing[1];
var thirdItem = eventClothing[2];

/*eventClothing.forEach(function(item,index,array) {
    console.log();
}*/

if (tempFahr < 54) {
    tempClothing = "a coat";
}else if (tempFahr <= 54) {
	tempClothing = "a jacket";
}else if (tempFahr > 70) {
	tempClothing = "no jacket";
}else if (eventType == casual) {
    eventClothing = firstItem;
}else if (eventType == semiformal) {
	eventClothing = secondItem;
}else if (eventType == formal) {
	eventClothing = thirdItem;	
}

/*result is equal to tempFahr + eventType + tempClothing + eventClothing*/

// joining strings together
/*var result = tempClothing.concat(eventClothing[0]);
console.log(result);*/

var result = ("Since it is " + tempFahr + " degrees, and you are going to a " + eventType + " event, you should wear " + tempClothing + " and " + firstItem);
console.log(result);

