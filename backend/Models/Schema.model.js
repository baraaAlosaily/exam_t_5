'use strict'

const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  slug: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true
  },
  gender: String,
  img: String,
  psiPowers: String
})

const getSchemaGame = mongoose.model('gameSchema', gameSchema)

module.exports = getSchemaGame