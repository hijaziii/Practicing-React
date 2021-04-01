const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

// Middleware
app.use(express.json());
app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
const PORT = process.env.PORT || 5000;


const mongoURI = "mongodb://localhost/practicing-React"

const db = process.env.MONGODB_URI || mongoURI

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }

};

connectDB();

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// API and View routes
app.use(routes);

app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));