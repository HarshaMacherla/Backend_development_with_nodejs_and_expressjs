const { v4: uuid } = require("uuid");
const { format } = require("date-fns");

const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");

const logEvents = async (msg, logName) => {
  const dateTime = `${format(new Date(), "dd/MM/yyyy\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${msg}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", logName),
      logItem
    );
  } catch (err) {
    console.error(`Error ${err}`);
  }
};

module.exports = logEvents;
