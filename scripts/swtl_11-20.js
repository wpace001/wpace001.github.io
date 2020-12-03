/* Chapter 11: Comparison operators*/

function chap11(){
    var compareMe = 8;
    if(compareMe === 8){
      alert("The value is equal " + compareMe);
    }
  }
  
  function chap11b(){
    var compareMe2 = 8;
    if(compareMe2 !== 0){
      alert(`The value is not equal ${compareMe2}`);
    }
  }
  
  /* Chapter 12: if...else and else if statements*/
  
  function chap12(){
    var firstQuestion = "What would you like to play on? ";
    var firstOption = "(PC)";
    var serverAnswer = "We don't have a running PC right now.";
    var serverAnswer2 ="Check back tomorrow.";
    var firstTime = prompt(firstQuestion + firstOption);
    if (firstTime === "PC"){
      alert(serverAnswer);
    } else {
      alert(serverAnswer2);
    }
  }
  
  /* Chapter 13: Testing sets of conditions*/
  
  function chap13() {
    var firstPick = "Sony";
    var secondPick = "Xbox";
    var gameOption = "God of War";
    var gameOption2 = "Halo";
    if (gameOption === firstPick && gameOption2 === secondPick){
      alert(`Your first pick is ${gameOption} and your second pick is ${gameOption2}`);
    }
  }
  
  function chap13b() {
    var firstPick = "Sony";
    var secondPick = "Xbox";
    var gameOption = "God of War";
    var gameOption2 = "Halo";
    if (gameOption === firstOrder || gameOption2 === secondPick){
      alert(`Your first pick is ${firstPick} or your second pick is ${secondPick}`);
    }
  }
  
  /* Chapter 14: nested if statement */
  
  function chap14(){
    var a = 2;
    var b = 2;
    var c = 4;
    var d = 5;
  
    if (a === b) {
      if (c !== d) {
        var g = "I am doing 2 if statements!";
        alert(g);
      }
    }
  }
  
  /* Chapter 15: Arrays*/
  
  function chap15(){
    var gamingArray = ["PC", " Xbox ", " Sony ", " Nintendo "];
    alert(gamingArray);
  }
  
  /* Chapter 16: Arrays and adding and removing elements*/
  
  function chap16(){
    var gamingArray = ["PC", " Xbox ", " Sony ", " Nintendo "];
    gamingArray.pop(3);
    gamingArray.push(" Mobile");
    alert(gamingArray);
  }
  
  /* Chapter 17: Arrays and removing, inserting, and extracting elements*/
  
  function chap17(){
    var gamingArray = ["PC", " Xbox ", " Sony ", " Nintendo "];
    gamingArray.shift();
    alert(gamingArray);
  }
  
  function chap17b(){
    var gamingArray = ["PC", " Xbox ", " Sony ", " Ninendo "];
    gamingArray.unshift();
    alert(gamingArray);
  }
  
  function chap17c(){
    var gamingArray = ["PC", " Xbox ", " Sony ", " Nintendo "];
    gamingArray.splice(1, 3);
    alert(gamingArray);
  }
  
  function chap17d(){
    var gamingArray = ["PC", " Xbox ", " Sony ", " Nintendo "];
    gamingArray = gamingArray.slice(1);
    alert(gamingArray);
  }
  
  /*  Chapter 18: for loops*/
  
  function chap18(){
    var gamingArray = ["PC", "Xbox", "Sony", "Nintendo"];
    var visitorPick = prompt("What would you like to play on?");
    for (var i = 0; i <= 3; i++) {
      if (visitorPick === gamingArray[i]) {
        alert("Great choice!");
      }
    }
  }
  
  /* Chapter 19: for loops with flags, Booleans, array length, and loopus interruptus*/
  
  function chap19(){
    var mobile = false;
    var gamingArray = ["PC", "Sony", "Xbox", "Nintendo"];
    var visitorPick = prompt("What would you like to play on?");
    for (var i = 0; i <= 3; i++) {
      if (visitorPick === gamingArray[i]) {
         mobile = true;
        alert("We have it ready in the back.");
        break;
      }
    }
    if(mobile===false) {
          alert("We do not have mobile options.");
      }
  }
  
  /* Chapter 20: for loops nested*/
  
  function chap20() {
    var i;
      var printLine = "";
    var j;
    for (i = 0; i < 2; i++) {
      for (j = 0; j < 2; j++) {
        printLine += "Come game with me!" + "<br>";
        document.getElementById("chapter20").innerHTML = printLine;
      } 
    } 
  }