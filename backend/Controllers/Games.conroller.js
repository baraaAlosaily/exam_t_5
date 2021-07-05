'use strict'

const { default: axios } = require('axios')
const { response } = require('express')
const getModel = require('../Models/Games.model')


const getGame = async (req, res) => {
  const url = `https://psychonauts-api.herokuapp.com/api/characters?limit=10`
  axios.get(url).then(response => {
    const newGame = response.data.map(obj => {
      return new getModel(obj)
    })
    res.send(newGame)
  }).catch(error => {
    console.log('===========');
    console.log('Error Catched');
    console.log('===========');
    console.log(error);
  })
}

module.exports = getGame