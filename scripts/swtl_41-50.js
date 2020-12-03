function chap41(){
    var i = 0;
    var text = "";
    while(i<3) {
      text += "How are you today?" + "<br>";		
      i++;
    }
    document.getElementById("chapter41").innerHTML = text;
  }
  function chap42(){
    var i = 1;
    var text = "";
    do{
      text += "How are you today?" + "<br>";		
      i++;
    } while(i<0);
    document.getElementById("chapter42").innerHTML = text;
  }
  function chap46(){
    alert("Welcome to Soulless Gaming")
  }
  function chap49() {
    if (document.getElementById("firstchoice").value === "PC") {
      alert("Nice");
    }
    else {
      alert("PC Master Race");
    }
  }
  function chap50() {						
      document.getElementById("answer").value = "Nice!.";
  }