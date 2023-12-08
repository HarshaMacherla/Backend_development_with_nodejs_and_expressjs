const fsPromise = require("fs").promises;
const path = require("path");

console.log("Hello...");

const fsOps = async () => {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        console.log(data);
      }
    );
    console.log(data);

    await fsPromise.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      `${data}\n\n`,
      (err) => {
        if (err) throw err;
        console.log("Write success!");
      } 
    );

    await fsPromise.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "Nice to meet you!\n\n",
      (err) => {
        if (err) throw err;
        console.log("Write success!");
      }
    );

    await fsPromise.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt"),
      (err) => {
        if (err) throw err;
        console.log("Rename complete!");
      }
    );
  } catch (err) {
    console.error(`Uncaught ${err}`);
  }
};

fsOps();

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Error: ${err}`);
  process.exit(1);
});
