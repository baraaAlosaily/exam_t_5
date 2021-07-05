'use strict'

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const axios = require('axios')
const app = express()
require('dotenv').config()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8081

mongoose.connect('mongodb://localhost:27017/art', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const getGame = require('./Controllers/Games.conroller')
const Crud = require('./Controllers/Schema.conroller')
app.get('/', (req, res) => {
  res.send('My app is working well')
})

app.get('/game', getGame)

app.post('/game/list', Crud.creatGameFav)
app.get('/game/list', Crud.getGameFav)
app.delete('/game/list/:slug', Crud.deleteGameFav)
app.put('/game/list/:slug', Crud.putGameFav)



app.listen(PORT, () => {
  console.log(`Server work on ${PORT}`);
})