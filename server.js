const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./Routes/apiRouter');
require('dotenv').config()



const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_CONNECTION)
    .then(() =>{
        console.log('connection succed!');
})
.catch((err) => console.log('no connection'));

const app = express();

app.use(bodyParser.json());
app.use('/api', apiRouter)
app.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`))

