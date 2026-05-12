const mongoose = require('mongoose');
const serverConfig = require("./serverConfig");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(serverConfig.MONGO_URI);
        if (conn.connection.host) {
            console.log('Connected to database successfully');
        }        
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;