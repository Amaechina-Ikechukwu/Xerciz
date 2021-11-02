const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();
const xercizRouter = require('./routes/xerciz')
const usersRouter = require('./routes/users')

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/xerciz', xercizRouter)
app.use('/users', usersRouter)

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Linked to MongoDB')
});

app.listen(port, () => {
    console.log(`Server established on port ${port}`)
})
