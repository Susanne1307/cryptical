const fs = require("fs");

function readPasswords() {
  const passwordsJSON = fs.readFileSync("./db.json", "utf8");
  const passwords = JSON.parse(passwordsJSON);
  return passwords;
}

function readMasterPassword() {
  const passwordsJSON = fs.readFileSync("./db.json", "utf8");
  const passwords = JSON.parse(passwordsJSON);
  const masterPassword = passwords["masterPassword"];
  return masterPassword;
}

function writePasswords(passwords) {
  fs.writeFileSync("./db.json", JSON.stringify(passwords, null, 2));
}

exports.readPasswords = readPasswords;
exports.writePasswords = writePasswords;
exports.readMasterPassword = readMasterPassword;

// module.exports {
// readPasswords,
// writePasswords,
// };
