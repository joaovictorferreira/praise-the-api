require('dotenv').config();
const express = require('express');
const routes = require('./routes/route');
const app = express();
const port = process.env.PORT

app.use(express.json());
app.use('/bosses', routes)

app.listen(port, () =>{
    console.log(`listening on port ${port}`)
});