var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("help");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var tips = [
  "Don't be afraid to come up \nor follow ridiculous ideas!",
  "Maybe combine app and game ideas! You could \ncome up with something useful and fun at the same time!",
  "You could use game ideas again and again, \nand then combine all of them for a super game!",
  "Don't forget to check the help button \nif you want any help!"
];

var r = Math.floor(Math.random() * 4);
document.getElementById("tip").innerText = "Tip: " + tips[r];
