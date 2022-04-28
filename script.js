function my_alert() {
    alert("congrats")
    console.log("this is working")

}
my_alert()



function sound() {
    console.log("Play this sound now")
    var button = new Audio("./sounds/meow.mp3")
    button.play()
}

function sound2() {
    console.log("I think im big meech")
    var button = new Audio("./sounds/bigmeow.mp3")
    button.play()
}