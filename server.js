const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { port, mongoURI } = require('./config')
const transactionsRoutes = require('./routes/transaction')
const path = require('path')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb database is connected'))
    .catch((err) => console.log('disconnected ' + err))

app.use('/api/transactions', transactionsRoutes)

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(port, () => console.log('Express is running at port ' + port))