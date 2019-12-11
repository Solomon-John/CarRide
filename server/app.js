const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyparser = require('body-parser');

const router = require('./routes/routes');

const cors = require('cors');



app.use(cors()); 

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false}));

app.use("/", router);



const port = 1010;

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
})





const db = mongoose.connect("mongodb://localhost:27017/car-rentals", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

if (db) {
    console.log('database  connected')
} else {
    'database not connected'
}