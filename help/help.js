let level = 1;

function yes() {
    if (level === 1) {
        alert("Nice!");
        document.getElementById("prompt").innerText = "Does it already exist?";
        level += 1;
    } else if (level === 2) {
        alert("Research! Does it have any bugs? Or any features that you think the app should have? If yes, then keep going!");
    } else if (level === 3) {
        alert("Good! But make sure to ask many different people. Everyone has different interests!");
        document.getElementById("prompt").innerText = "Do you want to do it?";
        level += 1;
    } else if (level === 4) {
        alert("Congrats! Now you can start programming your project!");
    }
}

function no() {
    if (level === 1) {
        alert("Keep Brainstorming");
    } else if (level === 2) {
        alert("NICE! A new, original Invention!");
        document.getElementById("prompt").innerText = "Do people want it?";
        level += 1;
    } else if (level === 3) {
        alert("Keep Brainstorming");
    } else if (level === 4) {
        alert("Go back to start");
    }
}

function notSure() {
    if (level === 1) {
        alert("Keep Brainstorming");
    } else if (level === 2) {
        alert("Look it up!");
    } else if (level === 3) {
        alert("Ask Around! Ask Family, Friends and/or the Internet!");
    } else if (level === 4) {
        alert("Look at what that project requires. Is it something you are comfortable with? Go from there");
    }
}