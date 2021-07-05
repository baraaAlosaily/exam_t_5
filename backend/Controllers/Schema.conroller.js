'use strict'

const gamePeice = require('../Models/Schema.model')

const creatGameFav = async (req, res) => {
  const { name, gender, img, psiPowers } = req.body
  const slug = name.toLowerCase().split(' ').join('-')
  gamePeice.find({ name: name }, (error, data) => {
    if (data.length > 0) {
      res.send('data exist')
    } else {
      const newGame = new gamePeice({
        name: name, gender: gender, img: img, psiPowers: psiPowers, slug: slug
      })
      newGame.save()
      res.send(newGame)
    }
  })
}
const getGameFav = async (req, res) => {
  gamePeice.find({}, (error, data) => {
    res.send(data)
  })
}
const deleteGameFav = async (req, res) => {
  const slug = req.params.slug
  gamePeice.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else { res.send(data) }
  })
}
const putGameFav = async (req, res) => {
  const { psiPowers } = req.body
  const slug = req.params.slug
  gamePeice.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {
      data[0].psiPowers = psiPowers;
      data[0].save()
      res.send(data)
    }
  })
}

module.exports = {
  creatGameFav, getGameFav, deleteGameFav, putGameFav
}