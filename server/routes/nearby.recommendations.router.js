const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET ROUTE
router.get('/', (req, res) => {
  const sqlText = ` SELECT * FROM "nearby_recommendations"
  ORDER BY "location_name" ASC`;

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

// POST ROUTE
router.post('/', (req, res) => {
  console.log('POST /api/recommendations: ', req.body);
  const sqlText =
    'INSERT INTO "nearby_recommendations" ("location_name", "korean_address", "address", "category", "description", "header_image") VALUES($1,$2,$3,$4,$5,$6)';

  pool
    .query(sqlText, [
      req.body.location_name,
      req.body.korean_address,
      req.body.address,
      req.body.category,
      req.body.description,
      req.body.header_image,
    ])
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((dbError) => {
      console.log('error adding new recommendation: ', dbError);
      res.sendStatus(500);
    });
});

//UPDATE (PUT) ROUTE
// TODO: WRITE UPDATE ROUTE!
router.put('/:id', (req, res) => {
  console.log('PUT Route /api/recommendations', req.params, req.body);
  let queryText = `UPDATE "nearby_recommendations" SET "location_name" = $1, "korean_address" = $2, "address" =$3, "category" =$4, "description" = $5, "header_image" = $6 WHERE "id"= $7`;
  sqlValues = [
    req.body.location_name,
    req.body.korean_address,
    req.body.address,
    req.body.category,
    req.body.description,
    req.body.header_image,
    req.body.id,
  ];

  pool
    .query(queryText, sqlValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in PUT /api/recommendations: ', error);
      res.sendStatus(500);
    });
});

//DELETE ROUTE
router.delete('/:id', (req, res) => {
  console.log('in DELETE route: ', req.body);
  const { id } = req.params;
  const sqlText = 'DELETE FROM "nearby_recommendations" WHERE "id" = $1';

  const sqlValues = [id];

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbError) => {
      console.log('Error removing recommendation: ', dbError);
      res.sendStatus(500);
    });
});
module.exports = router;
