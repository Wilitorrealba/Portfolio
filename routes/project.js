const express = require('express');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const result = await db('SELECT * FROM projects;');
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;
