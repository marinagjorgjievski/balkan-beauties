'use strict'

const Flag = use('App/Models/Flag')

class FlagController {
  async index({params, view}) {
    return view.render('flags.'+params.flag, {
    })
  }
}

module.exports = FlagController
