function fizzBuzz1() {
	var firstName = document.getElementById("first-name").value;
	var middleInitial   = document.getElementById("middle-initial").value;
	var lastName  = document.getElementById("last-name").value;
	document.getElementById("greeting").innerHTML =  `Welcome to Soulless Gaming, ${firstName} ${middleInitial}. ${lastName}!`;
	var displayMessage = "";
	var i;
	var word1 = "Soulless";
	var word2 = "Gaming"
	var wordCombo = word1 + word2;
	for (i = 1; i <= 140; i++) 
	{
		displayMessage += `${i}. `
		if (i % 3 === 0 && i % 5 === 0) 
		{
      displayMessage += wordCombo;
		} 
		else if (i % 5 === 0) 
		{
			displayMessage += word1;
		}	
		else if (i % 3 === 0)
		{
      displayMessage += word2;
		} 
		else 
		{
      displayMessage += ` `;
		}
		displayMessage += "<br>";
	}
	document.getElementById("demoOne").innerHTML = displayMessage;
}