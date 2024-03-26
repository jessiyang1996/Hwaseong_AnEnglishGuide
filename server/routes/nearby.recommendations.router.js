const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  const sqlText = ` SELECT * FROM "nearby_recommendation"
  ORDER BY "location_name" DESC`;

  pool
    .query(sqlText)
    .then((databaseResponse) => {
      res.send(databaseResponse.rows);
    })
    .catch((databaseError) => {
      console.log(
        'Error in getting Nearby Recommendations from DB: ',
        databaseError
      );
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
