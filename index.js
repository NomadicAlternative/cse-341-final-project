const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const mongodb = require('./data/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', require('./routes'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongodb.initDB((err) => {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
    } else {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
            console.log(`Swagger docs: http://localhost:${port}/api-docs`);
        });
    }
});