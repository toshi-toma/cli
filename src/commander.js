const program = require("commander");

program.option("--watch", "watch file");

program.parse(process.argv);

const options = program.opts();

console.log("options", options);

console.log("args", program.args);
