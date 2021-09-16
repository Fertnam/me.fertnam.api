const Personal = require('../models/personal')

class PersonalController {
    async get(request, response, next) {
        try {
            response.json(await Personal.get())
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new PersonalController()
