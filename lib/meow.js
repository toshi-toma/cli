const meow = require("meow");
const foo = require(".");

const cli = meow(
  `
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
`,
  {
    flags: {
      rainbow: {
        type: "boolean",
        alias: "r"
      }
    }
  }
);

console.log(cli);

foo(cli.input[0], cli.flags);
