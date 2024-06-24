const fs = require("fs");

function readDb(dbName = "db.json") {
  const data = fs.readFileSync(dbName, "utf-8");
  const convertedData = JSON.parse(data);
  return convertedData;
}

function writeDb(obj, dbName = "db.json") {
  if (!obj) {
    return;
  }

  try {
    let convertedData = JSON.stringify(obj);
    fs.writeFileSync(dbName, convertedData);
    console.log("Save successful");
  } catch (err) {
    console.log("Failed to save data\n", err.message);
  }
}

module.exports = {
  readDb,
  writeDb,
};
