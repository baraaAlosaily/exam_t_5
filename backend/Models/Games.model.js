'use strict'

class GamesModel {
  constructor(game) {
    this.name = game.name;
    this.gender = game.gender;
    this.img = game.img;
    this.psiPowers = game.psiPowers[0].description
  }
}

module.exports = GamesModel