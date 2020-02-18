'use strict'

const Country = use('App/Models/Country')

class CountryController {
  async index({params, view}) {
    return view.render('countries.'+params.country, {
    })
  }
}

module.exports = CountryController
