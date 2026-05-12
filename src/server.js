const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const serverConfig = require('./config/serverConfig');
const Redis = require('ioredis');
const connectRedis = require('./config/redis');

const app = express();

connectDB();
connectRedis();

//middlewares
app.use(express.json());
app.use(cors());

//test
app.use('/', (req, res) => {
    return res
        .send('Test Api working');
})

app.listen(serverConfig.PORT, () => {
    console.log(`Server listening on port ${serverConfig.PORT}`);
})