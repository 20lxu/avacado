function sayThatWasEasy () {
    var ThatWasEasy = new Audio ("that_was_easy.mp3"); 
ThatWasEasy.play();
}
$("#easy").on("click", sayThatWasEasy);
$(document).keypress(delegateKeypress);
function delegateKeypress(event) {
    if (event.charcode == 32) {
        $("#easy").trigger("click");
    }
}


