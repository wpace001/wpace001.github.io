function chap31() {
    var todayDate = new Date();	
      document.getElementById("time31").innerHTML = "Today is " + todayDate;
  }
  function chap32() { 
      var today = new Date();
      var todaysYear = today.getFullYear();
      alert("This year is: " + todaysYear + ".");
  }
  function chap32b() { 
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var today = new Date();
      var date = today.getMonth();
      var todaysMonth = months[date];
      alert("This month is: " + todaysMonth + ".");
  }
  function chap32c() {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var today = new Date();
      var date = today.getDay();
      var todaysName = days[date];
      alert("The week day is: " + todaysName + ".");
  }
  function chap32d() {
      var today = new Date();
      var hour = today.getHours();
      alert("The hour is: " + hour + ".");
  }
  function chap32e(){
    var today = new Date();
    var minutes = today.getMinutes();
    alert("The minute is: " + minutes + ".");
  }
  function chap32f(){
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    document.getElementById("time32").innerHTML = "The time is " + hour + ":" + minutes + ":" + seconds;
  }
  function chap33(){
      var today = new Date();
      var dateStreaming = new Date("December 1, 2020");
      var msToday = today.getTime();
      var msEndOfYear = dateStreaming.getTime();
      var msDiff = msEndOfYear - msToday;	
      var days = msDiff / (1000 * 60 * 60 * 24);
      days = Math.floor(days);
      alert("I will stream in " + days + " days ");	
  }
  function chap34(){
      var dateStreaming = new Date();
      dateStreaming.setDate(1);
      dateStreaming.setMonth(12);
      dateStreaming.setFullYear(2020);
      dateStreaming.setHours(11);
      dateStreaming.setMinutes(0);
      dateStreaming.setSeconds(0);
      document.getElementById("chapter34").innerHTML = dateStreaming;
  }
  function chap35() {
      var insideTheFunction = "Hello";
      document.getElementById("chapter35").innerHTML = insideTheFunction;
  }
  var num1 = 20;
  var num2 = 35;
  function chap36() {
    var sum = num1 + num2;
      document.getElementById("chapter36").innerHTML = "The sum is " + num1 + " + " + num2 + " = " + sum;
  }
  function chap37(){
      var first = prompt("How often I stream? ", "3");
      var second = prompt ("How often do you watch?", "3");
      var firstNum = parseInt(first);
      var secondNum = parseInt(second);
      function addNumbers(firstNum, secondNum) {
          return firstNum + secondNum;
      }
      var orderNum = addNumbers(firstNum, secondNum);
      document.getElementById("chapter37").innerHTML = "You watched a total of: " + orderNum + " streams.";
  }
      var global = "Global Scope";
  function chap38(){
      var local = "local scope";
      alert("I'm " + local);	
  }
  function chap38b() {
      var global = "global scope";
      function chap38a() {
          var local = "Local Scope";
      }
      alert("I'm " + global);
  }
  function chap39() {
      var gameOption = prompt("What would you like to watch?", "Destiny");
      switch(gameOption) {
          case "Destiny":
              document.getElementById("chapter39").innerHTML = "I will be playing " + gameOption + " on Tuesdays.";
              break;
          case "Monster Hunter":
          document.getElementById("chapter39").innerHTML = "I will be playing " + gameOption + " on Wednesdays.";
              break;
          case "Age of Empires":
          document.getElementById("chapter39").innerHTML = "I will be playing " + gameOption + " on Thursdays.";
              break;
          case "Minecraft":
          document.getElementById("chapter39").innerHTML = "I will be playing " + gameOption + " on Fridays.";
              break;
          default:
              document.getElementById("chapter39").innerHTML = "Sorry, I don't play that game.";
              break;
      }			
  }
  
  