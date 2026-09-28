const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', require('./routes'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Swagger docs: http://localhost:${port}/api-docs`);
});