const express = require('express');
const swaggerRoute = require('./routes/swagger');

const server = express();
const port = process.env.PORT || 9999;

/**
 * @swagger
 * /version:
 *   get:
 *     description: This endpoint returns API version
 */
server.get('/version', (req, res) => {
  res.json({
    version: 1.0,
  });
});

// Generate the swagger docs.
swaggerRoute(server);

server.listen(port, () => console.log(`Test API is running on http://localhost:${port}`));
