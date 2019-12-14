const program = require("commander");

program
  .command("clone <source> [destination]")
  .description("clone a repository into a newly created directory")
  .action((source, destination) => {
    console.log("clone command called");
  });

program
  .version("0.1.0")
  .command("install [name]", "install one or more packages")
  .command("list", "list packages installed", { isDefault: true })
  .parse(process.argv);
