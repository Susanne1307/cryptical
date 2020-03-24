const readline = require("readline");

function askForPassword(key) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readlineInterface.question(`Enter password of ${key}: `, (password) => {
      resolve(password);
      readlineInterface.close();
    });
  });
}

function askForMasterPassword() {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readlineInterface.question(`Enter master password:`, (masterPassword) => {
      resolve(masterPassword);
      readlineInterface.close();
    });
  });
}

exports.askForPassword = askForPassword;
exports.askForMasterPassword = askForMasterPassword;
