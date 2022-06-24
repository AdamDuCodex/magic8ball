let question = document.getElementById("question");
let ask = document.getElementById("askMe");

function randomImg() {
    let imgNumber = Math.floor(Math.random() * (20-1) + 1); //Set a variable imgNumber to a randomly generated integer from 1-20.
    document.getElementById("eightBall").src= "./images/magic8ball_" + imgNumber + ".png"; //Get the id "eightBall" from HTML and changing the source of the images files from imgNumber.
}