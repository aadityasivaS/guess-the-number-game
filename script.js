$("#out").text("Guess a number between 1️⃣ and 2️⃣0️⃣");
var randomNumber = Math.floor(Math.random() * 21);
$("#form").submit((e) => {
  e.preventDefault();
});
$("#submit").click(() => {
  let guessText = $("#guess").val();
  if (guessText == "") {
    $("#out").text("😅 A number must be provided");
  } else if (guessText <= 0 || guessText > 20) {
    $("#out").text("😅 Be in range 1️⃣ and 2️⃣0️⃣");
  } else if (guessText < randomNumber) {
    $("#out").text("🙂 great guess but try a higher number");
  } else if (guessText > randomNumber) {
    $("#out").text("😃 great guess but try a lower number");
  } else if (guessText == randomNumber) {
    $("#out").text(
      `😊 You guessed it  ${randomNumber} was the correct answer.`
    );
  }
});