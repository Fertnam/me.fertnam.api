const Skill = require('../models/skill')

class SkillsController {
    async get(request, response, next) {
        try {
            response.json(await Skill.all())
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new SkillsController()
