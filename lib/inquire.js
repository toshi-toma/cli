const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "name",
      message: "What's your name?",
      default: "toshi-toma"
    },
    {
      type: "list",
      name: "job",
      message: "What is your occupation?",
      choices: ["Frontend", "Backend", "Infra"]
    },
    {
      type: "checkbox",
      name: "country",
      message: "Where are you from?",
      choices: ["Japna", "US", "China", "Others"]
    }
  ])
  .then(({ name, job, country }) => {
    console.log(name);
    console.log(job);
    console.log(country);
  });
