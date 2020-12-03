function chap71() {
    var menu = {
        greeting: "Welcome to Soulless Gaming",
        displayGreet: function() {
            alert(this.greeting);
        }
    };
    menu.displayGreet();
}

function chap72(PlayStation, Dualshock) {
    this.console = PlayStation;
    this.console = Dualshock;
}

function chap73(message) {
    this.message = message;
    this.sayIt = function() {
        alert(this.message);

    };
}
var myObj = new chap73("Alert Chapter 73!");
myObj.sayIt();

function chap75() {
    var consoleOption = {
        console: "PS5"
    }
    alert(consoleOption.hasOwnProperty("PS5"));
}

function chap76() {
    window.location.href = "http://students.cpcc.edu/~wpace001/web115-85/brand.html";
}

function chap77() {
    window.location.assign("http://students.cpcc.edu/~wpace001/web115-85/");
}

function chap78() {
    window.history.back();
}

function chap79() {
    var pop = window.open();
    pop.document.write("<h1>Welcome to Soulless Gaming</h1><p>This is a new page.</p>");
}

function chap80() {
    var w = window.open("fly", "width=100,height=100,left=100,top=100");
    var greeting = "<link rel = 'stylesheet' type = 'text/css' href = 'styles/default.css'/> <h1>Welcome to Soulless Gaming</h1><p>This is a new page.</p>";
    w.document.write(greeting);
}