function changeGreeting() {						
	var first = document.getElementById("first_name").value;
	var mid   = document.getElementById("middle_initial").value;		
	var last  = document.getElementById("last_name").value;	
	// Write out welcome 
	document.getElementById("greeting").innerHTML = "Welcome to Soulless Gaming, " + first + " " + mid + ". " + last + "!";	
	// Create loop which prints themed message
	var msg = "";
	var i;
	for (i = 1; i < 126; i++) {
		msg += i + ".&nbsp;Simple as that!" + "<br>";
			
	// Write output to page	
	var writeToPage = document.getElementById("loop");
	writeToPage.innerHTML = msg;
	}		
}
function changeGreeting2() {					
	var first = document.getElementById("first_name").value;
	var mid   = document.getElementById("middle_initial").value;	
	var last  = document.getElementById("last_name").value;
			
	// Write out 
	document.getElementById("greeting").innerHTML = "Welcome to Soulless Gaming, " + first + " " + mid + ". " + last + "!";
			
	// Ask user for a number
	var howHigh = prompt("How high do you want to count, " + first + "?");
	var thisHigh = parseInt(howHigh);
		
	// Create loop which prints different message based on whether user's input was even or odd.
	var msg = "";
	var i;
	for (i = 1; i <= thisHigh; i++) {
		if (i % 2 == 0) {
			msg += i + ".&nbsp;Simple as that! - The number is even." + "<br>";
		} else {
			msg += i + ".&nbsp;Simple as that! - The number is odd." + "<br>";
		}
	// Write output to page
	var writeToPage = document.getElementById("loop");
	writeToPage.innerHTML = msg;
	}
}