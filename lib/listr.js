const Listr = require("listr");
const tasks = new Listr([
  {
    title: "Task 1",
    task: () => Promise.resolve("Foo")
  },
  {
    title: "Can be skipped",
    skip: () => {
      if (Math.random() > 0.5) {
        return "Reason for skipping";
      }
    },
    task: () => "Bar"
  },
  {
    title: "Task 3",
    task: () => Promise.resolve("Bar")
  }
]);

tasks.run().catch(err => {
  console.error(err);
});
