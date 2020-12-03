function testForBlocker() {
    var testPop = window.open("", "", "width=100,height=100");
    if (testPop === null || typeof(testPop) === "undefined") {
        //alert("Please disable your popup blocker");
        document.getElementById("81").innerHTML = "Please disable your pop-up blocker.";
    } else {
        document.getElementById("81").innerHTML = "Thank you for allowing pop-ups.";
    }
    testPop.close();
}

function chap82() {
    var gamingOption = document.getElementById("Gaming device");
    if (gaming.value.length === 0) {
        document.getElementById("82").innerHTML = "Please enter your gaming device here.";
        gaming.focus();
        return false;
    } else {
        document.getElementById("82").innerHTML = "Thank you for telling me.";
    }
}

function chap83(selectID) {
    var selectedGame = document.getElementById(selectID);
    if (selectedGame.selectedIndex === 0) {
        alert("Please select your game.");
        return false;
    } else {
        document.getElementById("83").innerHTML = `Your game number is ${selectedGame.selectedIndex}. Thank you for playing.`;
    }
}

function chap84(name) {
    var items = document.getElementsByName(name);
    for (var i = 0; i < items.length; i++) {
        if (items[i].checked) {
            document.getElementById("84").innerHTML = `Thank you for your playing.`;
            return true;
        }
    }
    alert("Please select your game.");
    return false;
}

function chap85() {
    var phoneField = document.getElementById("phone");
    var valueEntered = document.getElementById("phone").value;
    var numChars = document.getElementById("phone").value.length;
    if (numChars < 10) {
        document.getElementById("85").innerHTML = ("Please enter a 10-digit phone number.");
        phoneField.focus();
        return false;
    }
    for (var i = 0; i <= 9; i++) {
        var thisChar = parseInt(valueEntered[i]);
        if (isNaN(thisChar)) {
            document.getElementById("85").innerHTML = ("Please only enter the numbers.");
            phoneField.focus();
            return false;
        } else {
            document.getElementById("85").innerHTML = ("We'll call when your game is ready for pick up.");
        }
    }
}

function chap86() {
    var validateEmail = true;
    var emailField = document.getElementById("email");
    var eEntered = document.getElementById("email").value;
    if (eEntered.indexOf(" ") !== -1) {
        alert("Please enter the email address without spaces.");
        emailField.focus();
        return false;
    }
    if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
        validateEmail = false;
    }
    if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 || eEntered.indexOf(".") > eEntered.length - 3) {
        validateEmail = false;
    }
    if (validateEmail === false) {
        alert("Please enter a valid email.");
        emailField.focus();
        return false;
    } else {
        document.getElementById("86").innerHTML = "You entered a valid email."
    }
}

function chap87() {
    try {
        var gameOption = "I won't display this message.";
        document.getElementById("87").innerHTML = (gameOption);
    } catch (error) {
        document.getElementById("87").innerHTML = `${error}`;
    }
}

function chap88() {
    try {
        var anything = document.getElementById("userInput");
        anything.style.background = "white";
        var addressIsLegal = true;
        var eEntered = document.getElementById("userInput").value;
        if (eEntered.indexOf(" ") !== -1) {
            anything.focus();
            throw ("There are one ore more spaces in the email address.");
            return false;
        }
        if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
            addressIsLegal = false;
        }
        if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 || eEntered.indexOf(".") > eEntered.length - 3) {
            addressIsLegal = false;
        }
        if (addressIsLegal === false) {
            anything.focus();
            throw ("The format of the email is not correct.");
            return false;
        } else {
            document.getElementById("88").innerHTML = "Your form has been submitted."
        }
    } catch (error) {
        document.getElementById("88").innerHTML = (error);
    }
}