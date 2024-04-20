const mongoose = require('mongoose');
const URI = process.env.MongoDbUri;
const {connectDatabase}= require('../database/database.js')

// connect to mongoDB
try {
    exports.connectDatabase= mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}
