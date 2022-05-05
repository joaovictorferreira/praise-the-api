require('dotenv').config();
const express = require('express');
const routes = require('./routes/route');
const swaggerUi = require('swagger-ui-express');
const sjson = require("./doc/swagger.json");
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use('/bosses', routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(sjson))

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
});