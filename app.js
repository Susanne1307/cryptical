const [command, key, value] = process.argv.slice(2);
const { readPasswords, writePasswords } = require("./lib/passwords");

function get() {
  try {
    const passwords = readPasswords();
    console.log(key, passwords[key]);
  } catch (error) {
    console.error(error);
  }
}

function set() {
  console.log("Called SET", key, value);
  try {
    const passwords = readPasswords();
    passwords[key] = value;
    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

function unset() {
  console.log("Called UNSET", key);
  try {
    const passwords = readPasswords();
    delete passwords[key];
    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

if (command === "get") {
  get();
} else if (command === "set") {
  set();
} else if (command === "unset") {
  unset();
} else {
  console.log("Unkown command");
}
