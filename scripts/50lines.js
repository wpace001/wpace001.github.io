document.write(x + y);
1 + 1 // 2
2 * 2 // 4
3 - 1 // 2
10 / 2 // 5
typeof(variable) // "undefined"
string = "Hello World" // "Hello World"
typeof(variable) // Boolean
alert(2 + 2); // 4
var totalCost = 1 + 3 * 4; // 16
var quantity = 3; // 3
"Reid"; // Reid
Math.round(4.7); // 5
Math.PI; // 3.141592653589793
Math.pow(8,2); // 64
console.log('hi there!') // Hi There!
document.write("I dont like JavaScript"); // i dont like JavaScript
function show_random_number() {

  var random_number = Math.random();
  alert(random_number); 
}
<input type=button onClick="show_random_number()" value="Generate random number">; //0.1555312217820346
for (var i=1; i<=10; i=i+1) {
document.write(i); 
if (i<10) { 
document.write(", "); // 1,2,3,4,5,6,7,8,9,10
  }
}
<p style="color: green"></p> //changes the color to green
Make a calculator:
<script>
function calculate_this() {
  var input = document.getElementById('numbers').value;
  var results = eval(input);
  document.getElementById('results').innerHTML = results;
}
</script>

Calculator: <input type="text" id="numbers" value="2*2+1">
<input type=button value="Calculate" onClick="calculate_this()"><br>
Result: <span id="results">(click "Calculate")</span>
var variable1 = 'Hello ';
var variable2 = 'World!;
var final_text = variable1 + variable2; //Hello World!
var n = 9;
var x = n*n;
document.write("Result of n*n=" + x); // Result of n*n=81
<b></b> //makes the text bold 
