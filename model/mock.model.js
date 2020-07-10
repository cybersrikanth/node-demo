
const mongoose = require('mongoose');

const mockSchema = new mongoose.Schema({
    name:{
        type:String,
        default:"anonymous"
    },
    time: {
        type: Date,
        default: new Date()
    },
    watt: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('mock', mockSchema);