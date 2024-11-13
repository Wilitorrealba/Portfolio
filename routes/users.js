const express = require('express');
 //require express module and creates an express application
const router = express.Router(); // has methods for routing http requests and controls how the application behaves//-
 //imports a module named helper from the model directory -- contains helper functions or utilities related to interacting with a database.
// Express middleware to parse JSON request bodies
const db = require('../model/helper');

// router.get('/', (req, res) => {
//   res.send('Welcome to the users section');
// });


// Get all users from the users table
router.get('/', async (req, res) => {
  try {
    const query = 'SELECT id, username, email FROM users'; // Get all users' ids, usernames, and emails
    const userResults = await db(query); // Query the database using your db function

    // If users exist, return them
    if (userResults.data.length > 0) {
      res.status(200).json(userResults.data);
    } else {
      res.status(404).json({ message: 'No users found' });
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});



router.post('/', async (req, res) => {
  const { username, password, email } = req.body;
console.log("THIS IS THE REQ.BODY", req.body);
  try {
      // Insert the new user into the users table
      const insertQuery = `INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}');`;
      const userResults = await db(insertQuery);
  
console.log("THIS IS THE USER RESULTS", userResults);
  if (result.data.length > 0 && result.data[0].insertId) {
  const userId = result.data[0].insertId;
      // Fetch and return the newly created user information (ID and username)
      const selectQuery = `SELECT id, username FROM users WHERE id = ${userId}`;
      const newUser = await db(selectQuery);

      // Send the newly created user information as the response
      res.status(201).json(newUser.data[0]);
    } else {
      res.status(400).json({ message: 'Failed to create user' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding user' });
  }
});


module.exports = router;
