const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./db.js')
const personsRoute = require('./persons.route')

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, 
    {useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true}).then(
    () => {console.log('Database is connected')},
    err => {console.log('Can not connect to database' + err)}
)

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use('/persons', personsRoute)

app.get('/', (req, res) => {
    res.json("hello")
})

app.listen(3001, () => {
    console.log('Server is running on Port : 3001')
})