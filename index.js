const { write } = require("fs");
const { readDb, writeDb } = require("./db_functions");

const dataObj = {
  name: "james",
  favoriteNumbers: [8, 3],
};

writeDb(dataObj);

console.log(readDb());
