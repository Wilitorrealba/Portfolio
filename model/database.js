require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS || "root",
  database: DB_NAME || "facebook",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to database!");

  let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();
  con.query(sql, function(err, result) {
    if (err) throw err;

    console.log("Table creation `students` was successful!");

    console.log("Closing connection...");
    con.end();
  });
});
