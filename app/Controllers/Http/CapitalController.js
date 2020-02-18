'use strict'

const Capital = use('App/Models/Capital')

class CapitalController {
  async index({params, view}) {
    return view.render('capitals.'+params.capital, {
    })
  }
}

module.exports = CapitalController
