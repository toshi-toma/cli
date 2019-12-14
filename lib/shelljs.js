const shell = require("shelljs");

console.log(shell.which("git"));

console.log(shell.cat("package.json"));

shell.cp("package.json", "package-copy.json");

shell.ls("lib/**/*.js").forEach(function(file) {
  console.log(file);
});
