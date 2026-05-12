const { default: Redis } = require("ioredis");
const serverConfig = require("./serverConfig");

const connectRedis = () => {
    const redisClient = new Redis(serverConfig.REDIS_URL);

    redisClient.on('connect', () => {
        console.log('Connected to Redis');
    });

    redisClient.on('error', (error) => {
        console.error('Redis Error:', error.message);
    });
}

module.exports = connectRedis;