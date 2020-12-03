function chap61() {
    var c = document.getElementById("soul").childNodes.length;
    document.getElementById("61").innerHTML = c + " options.";
  }
  function chap62() {
    var b = document.getElementById("soul2").lastChild.nodeName;
    document.getElementById("62").innerHTML = b; 
  }
  function chap63() {
    var a = document.getElementById("soul3");
    var ab = a.firstElementChild;
    var elementName = ab.nodeName;
    document.getElementById("63").innerHTML = "The first element of the div is " + elementName;
  }
  function chap64() {
      var d = document.getElementById("soul4");
      var countList = d.childNodes;
      var number = 0;
      var i; 
      for (i=0; i < countList.length; i++) {
           if(countList[i].nodeName.toLowerCase() === "ul") {
        number++;
           }
      }
      document.getElementById("64").innerHTML = "The number of unorder list: " + number;
  }
  function chap65() {
    document.getElementsByTagName("INPUT")[0].setAttribute("type", "button"); 
  }
  
  function chap65b(){
    document.getElementsByTagName("INPUT")[0].setAttribute("class", "myButton");
  }
  function chap66() {
      var e = document.getElementById("myButton").getAttribute("onclick");
    document.getElementById("66").innerHTML = e;
  }
  function chap67() {
    var myBtn = document.createElement("BUTTON"); 
    myBtn.innerHTML = "Hello!"; 
    document.getElementById("soul5").appendChild(myBtn);
  }
  function chap69() {
      var play = {
      first: "PC",
      second: "Xbox",
      third: "PlayStation"
    };	
    var myPlay = "<li>" + play.first + "</li>" + "<li>" + play.second + "</li>" + "<li>" + play.third + "</li>";
      document.getElementById("69").innerHTML = myPlay;
  }
  function chap70() {
    var play = {
      first: "Xbox",
      second: "PC",
      third: "PlayStation"
    };	
    var myPlay = "<li>" + play.first + "</li>" + "<li>" + play.second + "</li>" + "<li>" + play.third + "</li>";
      document.getElementById("70").innerHTML = myPlay;
  }