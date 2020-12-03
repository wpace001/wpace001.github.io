function fizzBuzz4() {
    var firstName = document.getElementById("first-name").value;
    var middleInitial = document.getElementById("middle-initial").value;
    var lastName = document.getElementById("last-name").value;
    document.getElementById("greeting").innerHTML = `Welcome to Soulless Gaming, ${firstName} ${middleInitial}. ${lastName}!`;
    // LOOP MESSAGE - EVEN or ODD Number printed - with parameters and function checkDivision()
    var displayMessage = "";
    var word1 = document.getElementById("firstWord").value;
    var word2 = document.getElementById("secondWord").value;
    var word3 = document.getElementById("thirdWord").value;
    var wordCombo = word1 + word2 + word3;
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    var thirdNumber = document.getElementById("thirdNumber").value;
    var i;
    var totalNumber = parseInt(document.getElementById("totalNumberCount").value);
    for (i = 1; i <= totalNumber; i++) {
        displayMessage += `${i}. `;
        if (checkDivision(i, firstNumber) && checkDivision(i, secondNumber) && checkDivision(i, thirdNumber)) {
            displayMessage += wordCombo;
        } else if (checkDivision(i, firstNumber) && checkDivision(i, secondNumber)) {
            displayMessage += word1 + word2;
        } else if (checkDivision(i, firstNumber) && checkDivision(i, thirdNumber)) {
            displayMessage += word1 + word3;
        } else if (checkDivision(i, secondNumber) && checkDivision(i, thirdNumber)) {
            displayMessage += word2 + word3;
        } else if (checkDivision(i, firstNumber)) {
            displayMessage += word1;
        } else if (checkDivision(i, secondNumber)) {
            displayMessage += word2;
        } else if (checkDivision(i, thirdNumber)) {
            displayMessage += word3;
        } else {
            displayMessage += "";
        }
        displayMessage += "<br>";
    }
    document.getElementById("game").innerHTML = displayMessage;
}

function checkDivision(num1, num2) {
    if (num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }
}