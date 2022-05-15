for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let currentButton = this.innerHTML;
        makeSound(currentButton);
        buttonAnimation(currentButton);
    });

}

addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

})

function makeSound(key) {
    switch (key) {
        case "w":
            let tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "a":
            let tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "s":
            let tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "d":
            let tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        default:
            console.log(key);
    }
}


function buttonAnimation(currentKey){

    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}





