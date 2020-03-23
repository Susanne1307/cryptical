const [command, key, value] = process.argv.slice(2);
const fs = require("fs");

function get() {
  try {
    const dbJSON = fs.readFileSync("db.json", "utf8");
    const passwords = JSON.parse(dbJSON);
    console.log(passwords["wifi"], passwords[key]);
  } catch (error) {
    console.error(error);
  }
}

function set() {
  console.log("Called SET", key, value);
  const dbJSON = fs.readFileSync("db.json", "utf8");
  const passwords = JSON.parse(dbJSON);
  passwords[key] = value;
  console.log(passwords[key]);
  try {
    fs.writeFileSync("db.json", JSON.stringify(passwords, null, 2));
  } catch (error) {
    console.error(error);
  }
}

function unset() {
  console.log("Called SET", key, value);
  const dbJSON = fs.readFileSync("db.json", "utf8");
  const passwords = JSON.parse(dbJSON);
  delete passwords[key];
  console.log(passwords[key]);
  try {
    fs.writeFileSync("db.json", JSON.stringify(passwords, null, 2));
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
