const mongoose = require('mongoose');

const pointSchema = mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number,
    }
});

const trackSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        default: '',
        type: String
    },
    locations: [pointSchema]
    
});

mongoose.model('Track', trackSchema);