const { writeSync, openSync } = require("fs");
const path = require('path');

const consoleLogInterceptor = () => {
  const log = console.log.bind(console)
  const logFileName = new Date().toISOString().replaceAll(':', '-');
  console.log = (...args) => {
    const writeTime = new Date().toLocaleTimeString();
    const fileHandle = openSync(path.join(__dirname, `../../logs/${logFileName}.txt`), "a")
    const logString = `[${writeTime}]: ${JSON.stringify(args, null, 2)}\n`;
    writeSync(fileHandle, logString);

    log(logString)
  }
}

module.exports = consoleLogInterceptor;