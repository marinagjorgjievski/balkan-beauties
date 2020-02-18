'use strict'

const Drink = use('App/Models/Drink')

class DrinkController {
  async index({params, view}) {
    return view.render('drinks.'+params.drink, {
    })
  }
}

module.exports = DrinkController
