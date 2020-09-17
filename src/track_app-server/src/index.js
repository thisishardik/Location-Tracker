require('./models/user');
require('./models/track');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth_routes');
const trackRoutes = require('./routes/track_routes');
const bodyPraser = require('body-parser');
const requireAuth = require('./middleware/require_auth');

const app = express();

app.use(bodyPraser.json());
app.use(authRoutes);
app.use(trackRoutes);


const mongoURI = 'mongodb+srv://admin:passwordpassword@cluster0.d0kfq.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.log("Error connecting to Mongo", err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email is ${req.user.email}`);
});


app.listen(3000, () => {
    console.log("Listening on PORT 3000");
});