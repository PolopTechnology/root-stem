var level = 1;
var lastChoice = 0;
var lastChoice2 = 0;
var choices = [];

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
 }

function generate() {
    if(level === 1) {
        var p1 = httpGet("https://random-word-form.herokuapp.com/random/animal");
        document.getElementById("gen").innerText = p1;
        choices.push(p1);
    } else if (level === 2) {
        var p2 = httpGet("https://random-word-form.herokuapp.com/random/noun");
        document.getElementById("gen").innerText = p2;
        choices.push(p2);
    } else if (level === 3) {
        var p3 = httpGet("https://random-word-form.herokuapp.com/random/noun");
        document.getElementById("gen").innerText = p3;
        choices.push(p3);
    } else if (level === 4) {
        var p4 = httpGet("https://random-word-form.herokuapp.com/random/noun");
        document.getElementById("gen").innerText = p4;
        choices.push(p4);
    } else if (level === 5) {
        var txt = "YAY! You have your material!\n Choices: " + choices + ".\n Now you can start to connect the dots and come up with an idea! And hey! If you can't think again, Try Again or use Help!";
        var links = "Some Links:\nhttps://www.w3schools.com/cs/ \nhttps://www.youtube.com/watch?v=1CgsMtUmVgs \nhttps://learn.unity.com/";
        alert(txt + "\n \n" + links);
    }
}
function next() {
    level += 1;
}