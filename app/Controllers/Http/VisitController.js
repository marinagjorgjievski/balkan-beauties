'use strict'

const Visit = use('App/Models/Visit')

class VisitController {
  async index({params, view}) {
    return view.render('visits.'+params.visit, {
    })
  }
}

module.exports = VisitController
