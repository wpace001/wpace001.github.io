function fizzBuzz3() {
    var firstName = document.getElementById("first-name").value;
      var middleInitial   = document.getElementById("middle-initial").value;
      var lastName  = document.getElementById("last-name").value;
      document.getElementById("greeting").innerHTML =  `Welcome to Soulless Gaming, ${firstName} ${middleInitial}. ${lastName}!`;
      var displayMessage = "";
    var i;
    var fizzNumber = 3;
    var buzzNumber = 5;
    var bangNumber = 7;
    var word1 = "Fizz";
    var word2 = "Buzz";
    var word3 = "BANG!";
    var wordCombo = word1 + word2 + word3;
    for (i = 1; i <= 140; i++) 
    {
      displayMessage += `${i}. `
      if (checkDivision(i, fizzNumber)  && checkDivision(i, buzzNumber) && checkDivision(i, bangNumber)) 
      { 
        displayMessage += wordCombo;
      } 
      else if (checkDivision(i, fizzNumber) && checkDivision(i, buzzNumber))
      {
        displayMessage += word1 + word2;
      } 
      else if (checkDivision(i, fizzNumber) && checkDivision(i, bangNumber))
      {
        displayMessage += word1 + word3;
      } 
      else if (checkDivision(i, buzzNumber) && checkDivision(i, bangNumber))
      {
        displayMessage += word2 + word3;
      } 
      else if (checkDivision(i, fizzNumber))
      {
        displayMessage += word1;
      } 
      else if (checkDivision(i, buzzNumber))
      {
        displayMessage += word2;
      } 
      else if (checkDivision(i, bangNumber))
      {
        displayMessage += word3;
      } 
      else 
      {
        displayMessage += "";
      }
      displayMessage += "<br>";
      }
      document.getElementById("demoThree").innerHTML = displayMessage;
  }
  function checkDivision(num1, num2) { 
    if(num1 % num2 === 0) {
      return true;
    } else {
      return false;
    }
  }