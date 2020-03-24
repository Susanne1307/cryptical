const readline = require("readline");

function askQuestion(question, { hideAnswer } = {}) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);

      // Adds line break to the command output
      readlineInterface.output.write("\n");

      readlineInterface.close();
    });

    // Hides entered password
    if (hideAnswer) {
      readlineInterface._writeToOutput = function () {
        readlineInterface.output.write("🔑");
      };
    }
  });
}

function askForPassword(key) {
  return askQuestion(`Enter password of ${key}: `);
}

function askForMasterPassword() {
  return askQuestion("Enter master password: ", {
    hideAnswer: true,
  });
}

exports.askForPassword = askForPassword;
exports.askForMasterPassword = askForMasterPassword;
