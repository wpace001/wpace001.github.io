function chap51(){
    document.getElementById("chapter51").innerHTML = "Welcome to Soulless Gaming";
  }
  function addBgColor(){
    document.getElementById("chapID").className += " chapter52b";
  }
  function chap53(){
    document.getElementById("before")
      .src="images/soulless_moving_logo.png";
  }
  function chap54(logo, moving) {
      var change = document.getElementById(logo);
      change.src = moving;
  }
  function chap55() {
      document.getElementById("chap55").style.border = "3px solid #FFFFFF";
  }
  function chap56() {
    var pgraphs = document.getElementsByTagName("p");
    alert(pgraphs[11].innerHTML);
  }
  function chap57() {
    var targetDiv = document.getElementById("best");
    var pgraphs = targetDiv.getElementsByTagName("p");
    alert(pgraphs[0].innerHTML);
  }
  function chap60() {
      var a = document.getElementById("Ch60");
      var imgs = a.childNodes[1];
      imgs.style.border = "5px solid #FFFFFF";	
  }