const express = require('express');
 //require express module and creates an express application

const router = express.Router(); // has methods for routing http requests and controls how the application behaves//-


const db = require("../model/helper"); //imports a module named helper from the model directory -- contains helper functions or utilities related to interacting with a database.
// Express middleware to parse JSON request bodies
router.use(express.json());

router.get('/', function(req, res, next) {
  res.send('Users Endpoint');
});

/* GET users listing. */
// router.get("/", async function(req, res, next) {
//   try {
//     const result = await db("SELECT * FROM users;");
//     res.send(result.data);
//   } catch (err) {
//     res.status(500).send(err)
//   }
// });
// //endpoint to get user by id
// router.get("/:id", async function(req, res, next) {
//   try {
//     const result = await db(`SELECT * FROM users WHERE id = ${req.params.id};`);
//     res.send(result.data);
//   } catch (err) {
//     res.status(500).send(err)
//   }
// });
module.exports = router;
