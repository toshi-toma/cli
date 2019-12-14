const Spinner = require("clui").Spinner;

let countdown = new Spinner("Exiting in 5 seconds...  ", [
  "⣾",
  "⣽",
  "⣻",
  "⢿",
  "⡿",
  "⣟",
  "⣯",
  "⣷"
]);

countdown.start();

let number = 5;
setInterval(function() {
  number--;
  countdown.message("Exiting in " + number + " seconds...  ");
  if (number === 0) {
    process.stdout.write("\n");
    process.exit(0);
  }
}, 1000);
