const mongoose = require('mongoose');

const CONNECTION_URL = process.env.CONNECTION_URL

exports.MongoDB_Connection = async () => {
    try {
        console.log("object",CONNECTION_URL)
        await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });
        console.log('Database connected.');
    } catch (err) {
        console.log(err.message)
        console.log('Failed in connecting with database');
    }
};