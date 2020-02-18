'use strict'

const Food = use('App/Models/Food')

class FoodController {
  async index({params, view}) {
    return view.render('foods.'+params.food, {
    })
  }
}

module.exports = FoodController
