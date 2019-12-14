#!/usr/bin/env node

require("yargs")
  .scriptName("console")
  .usage("$0 <cmd> [args]")
  .command(
    "hello [name]",
    "console your name!",
    yargs => {
      yargs.positional("name", {
        type: "string",
        default: "Toshihisa",
        describe: "the name to say hello to"
      });
    },
    function(argv) {
      console.log("hello", argv.name, "welcome to yargs!");
    }
  )
  .help().argv;
