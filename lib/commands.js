const { readPasswords, writePasswords } = require("./passwords");

function get(key) {
  try {
    const passwords = readPasswords();
    console.log(key, passwords[key]);
  } catch (error) {
    console.error(error);
  }
}

function set(key, value) {
  console.log("Called SET", key, value);
  try {
    const passwords = readPasswords();
    passwords[key] = value;
    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

function unset(key) {
  console.log("Called UNSET", key);
  try {
    const passwords = readPasswords();
    delete passwords[key];
    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

exports.get = get;
exports.set = set;
exports.unset = unset;
