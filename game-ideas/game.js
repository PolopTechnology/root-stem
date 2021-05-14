var level = 1;
var lastChoice = 0;
var lastChoice2 = 0;
var choices = [];

function generate() {
    if(level === 1) {
        let animal  = ["Sloth", "Cat", "Bear", "Pangolin"];
        var ran1 = Math.floor(Math.random() * 4);
        document.getElementById("gen").innerHTML = animal[ran1];
        lastChoice = ran1;
        choices.push(animal[ran1]);
    } else if (level === 2) {
        let similar = [
            ["Bed", "Trees", "Heat", "Running"], 
            ["Lions", "Destruction", "Dog", "Big"], 
            ["Attack", "Survival", "Lazy", "Small"], 
            ["In Danger", "Spinning", "Destructive", "Day"]];
        var ran2 = Math.floor(Math.random() * 4);
        document.getElementById("gen").innerHTML = similar[lastChoice][ran2];
        lastChoice = ran2;
        lastChoice2 = lastChoice;
        choices.push(similar[lastChoice][ran2]);
    } else if (level === 3) {
        let similar2 = [
            ["Night", "Warm", "Uncomfortable", "Day"],
            ["Oxygen", "Nature", "Smoke", "Humans"],
            ["Fire", "Sun", "Water", "Antartica"],
            ["Heart", "Exercise", "Sleepy", "Tired"],
            ["Griffin", "Kings", "Wolf", "Swinging"],
            ["Dynamite", "Chaos", "Peace", "Life"],
            ["Wolf", "Play", "Selfish", "Helpless"],
            ["Small", "Matter", "Gas", "Trivial"],
            ["Power", "Swords", "Cookies", "Friendly"],
            ["Hunting", "Building", "Giving Up", "Playing Bingo"],
            ["Sleepy", "Bed", "Active", "Hyper"],
            ["Big", "Matter", "Ants", "Adventure"],
            ["Attack", "Escape", "Safe?", "Time"],
            ["Wheel", "Travel", "Inert", "Hurt"],
            ["CHAOS", "Death", "Peaceful", "Music"],
            ["Heat", "Plasma Powers", "Night", "Ocean"]
        ];
        var index = lastChoice * lastChoice2;
        var ran3 = Math.floor(Math.random() * 4);
        document.getElementById("gen").innerHTML = similar2[index][ran3];
        choices.push(similar2[index][ran3]);
    } else if (level === 4) {
        let randomObj = ["Vase", "Machine", "Gun", "Surfboard", "Matchstick", "Cellphone"];
        var ran4 = Math.floor(Math.random() * randomObj.length);
        document.getElementById("gen").innerHTML = randomObj[ran4];
        choices.push(randomObj[ran4]);
    } else if (level === 5) {
        var txt = "YAY! You have your material!\n Choices: " + choices + ".\n Now you can start to connect the dots and come up with an idea! And hey! If you can't think again, Try Again or use Help!";
        var links = "Some Links:\nhttps://www.w3schools.com/cs/ \nhttps://www.youtube.com/watch?v=1CgsMtUmVgs \nhttps://learn.unity.com/";
        alert(txt + "\n \n" + links);
    }
}
function next() {
    level += 1;
}