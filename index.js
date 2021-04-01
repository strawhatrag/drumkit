//drum kit
//for mouse clicks
let numberOfBottons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfBottons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let drumValue = this.innerHTML;
        makeSound(drumValue);
        buttonAnimation(buttonInnerHTML);
    });
}
// for keyboard keys
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key)

});
//the common function
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("Sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("Sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("Sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("Sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("Sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("Sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("Sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("press valid one to make sound");

    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}