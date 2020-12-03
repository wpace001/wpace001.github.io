function introductionForm() {
	var firstName = document.getElementById("first-name").value;
	var middleInitial   = document.getElementById("middle-initial").value;
	var lastName  = document.getElementById("last-name").value;
	document.getElementById("greeting").innerHTML =  `Welcome to Soulless Gaming, ${firstName} ${middleInitial}. ${lastName}!`;
	// LOOP MESSAGE - EVEN or ODD Number printed - with parameters and function checkDivision()
  var answer1 = document.getElementById("firstQuestion").value; 
  var answer2 = document.getElementById("secondQuestion").value;
  var answer3 = document.getElementById("thirdQuestion").value;
  var answer4 = document.getElementById("fourthQuestion").value; 
  var answer5 = document.getElementById("fifthQuestion").value; 
  var answer6 = document.getElementById("sixthQuestion").value; 
  var answer7 = document.getElementById("seventhQuestion").value; 
  var displayMessage = `Hello, ${firstName}, please introduce yourself:`;
  var displayInformation = `Personal background: ${answer1} <br> Professional background: ${answer2} <br> Academic background: ${answer3} <br> Primary computer platform: ${answer4} <br> Courses taking: ${answer5} <br> Something to remember me by: ${answer6} <br> I'd like to share: ${answer7}`;
  document.getElementById("demo").innerHTML = displayMessage;
  document.getElementById("reviewInformation").innerHTML = displayInformation;
}
