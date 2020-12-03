  /* Chapter 1: Alerts*/

  function chap1(){
    alert("Welcome to the best gaming webpage!")
  }
  
  /* Chapter 2: Variables for Strings*/
  
  function chap2(){
    var PC = "PC Master Race";
    alert(PC);
  }
  
  /* Chapter 3: Variables for Numbers*/
  
  function chap3(){
    var amountOfGames = 10000000000000;
    alert(amountOfGames);
  }
  
  /* Chapter 4: Variable Names Legal and Illegal*/
  
  function chap4(){
    var illegalName = "_468what";
    alert(illegalName);
  }
  function chap4b(){
    var legalName = "waitwhat123";
    alert(legalName);
  }
  
  /* Chapter 5: Math Expressions and familiar operators*/
  
  function chap5(){
    var number = 100;
    var division = 4;
    var result = number / division;
    alert(result);
  }
  
  /* Chapter 6: Math Expressions and unfamiliar operators*/
  
  function chap6(){
    var numberToIncrease = 1;
    numberToIncrease++;
    alert(numberToIncrease);
  }
  
  function chap6b(){
    var numberToDecrease = 1;
    numberToDecrease--;
    alert(numberToDecrease);
  }
  
  /* Chapter 7: Math Expressions and eliminating ambiguity*/
  
  function chap7(){
    var mathEquation = (10-5)*5;
    alert(mathEquation);
  }
  
  function chap7b(){
    var mathEquation2 = 10-(5*5);
    alert(mathEquation2);
  }
  
  /* Chapter 8: Concatenating text strings*/
  
  function chap8(){
    var firstName = "This is my first string ";
    var lastName = "and this is the last string";
    alert(firstName + lastName);
  }
  
  /* Chapter 9: Prompts*/
  
  function chap9(){
    var askQuestion = prompt("Do you like gaming?");
  }
  
  /* Chapter 10: if statement*/
  
  function chap10() {
      var strategyGames = prompt("Do you like strategy games?", "Yes!");
      if(strategyGames === "Yes!") {
      alert("Cool! We do too!");
    } else {
      alert("Whelp!")
    }
  }
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
  /* Chapter 21: Changing case*/

function chap21(){
  var visitorPick = "PC";
  var visitorPickUpper = visitorPick.toUpperCase();
  alert(visitorPickUpper);
}

function chap21b(){
  var visitorPick = "PC";
  var visitorPickLower = visitorPick.toLowerCase();
  alert(visitorPickLower);
}

/* Chapter 22: Strings and measuring length and extracting parts*/

function chap22(){
  var choice = prompt("Enter your choice");
  var choiceLength = choice.length;
  alert("Your choice has " + choiceLength + " letters.");
}

/* Chapter 23: Strings and finding segments*/

function chap23(){
  var visitorPick = "PC";
  alert("The segment 'i' has the index of: " + visitorPick.indexOf("i"));
}

function chap23b(){
  var visitorPick = "PC Master Race";
  alert("The last 'a' in the segment has the index of: " + visitorPick.lastIndexOf("a"));
}

/* Chapter 24: Strings and finding a character at a location*/

function chap24(){
  var visitorPick = "PC";
  alert(visitorPick.charAt(0));
}

/* Chapter 25: Strings and replacing characters*/

function chap25(){
  var visitorPick = "I'd like to play PC games.";
  alert(visitorPick);
}

function chap25b(){
  var visitorPick = "I'd like to exclusives.";
  var other = "Halo";
  visitorPickOther = visitorPick.replace("God of War", other);
  alert(VisitorPickOther);
}

/* Chapter 26: Rounding numbers*/

function chap26(){
  var num = 3.1459;
  num = Math.round(num);
  alert(num);
}

function chap26b(){
  var num = 3.1459;
  num = Math.ceil(num);
  alert(num);
}

function chap26c(){
  var num = 3.1459;
  num = Math.floor(num);
  alert(num);
}

/* Chapter 27: Generating random numbers*/

function chap27(){
  var randomNum = Math.random();
  alert(randomNum);
}

/* Chapter 28: Converting strings to integers and decimals*/

function chap28(){
  var numOrders = "10";
  alert("number of orders: " + parseInt(numOrders));
}

function chap28b(){
  var numOrders = "18.5";
  alert("number of orders: " + parseFloat(numOrders));
}

/* Chapter 29: Converting strings to numbers, numbers to strings*/

function chap29(){
  var numOrderString = "10";
  var numOrders = Number(numOrderString);
  alert("This is the number of orders: " + numOrders);
}

/* Chapter 30: Controlling the length of decimals*/

function chap30(){
  var numOrders = 9.9721;
  alert("The number of orders: " + numOrders.toFixed());

}
