const express = require('express');
const  mongoose = require('mongoose');
const requireAuth = require('../middleware/require_auth');
const { Router } = require('express');

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async(req, res) => {
    
    const tracks = await Track.find({userID: req.user._id});

    console.log("************************");
    console.log(req.user);
    console.log("************************");
    
    res.send(tracks);
});

router.post('/tracks', async(req, res, next) => {
    const{ name, locations } = req.body;
    
    if(!name || !locations){
        return res.status(422).send({error: 'You must provide a name and your locations'});
    }
    try {
        const track = Track({ name: name, locations: locations, userID: req.user._id });
        await track.save();
        res.send(track);
    
    } catch (e) {
        res.status(422).send({error: e.message});
    }
});

module.exports = router;