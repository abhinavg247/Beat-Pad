// Code for removing instruction using jQuery

var instruction = $("#instruction");
console.log(instruction);
$(document).on("keypress", function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    // Alphabet upper case
    instruction.fadeOut("slow", function () {
      instruction.remove();
    });
  } else if (event.keyCode >= 97 && event.keyCode <= 122) {
    // Alphabet lower case
    instruction.fadeOut(300, function () {
      instruction.remove();
    });
  }
});
