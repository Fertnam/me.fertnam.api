const db = require('../db')

class Skill {
    constructor(id, name, progress) {
        this.id = id
        this.name = name
        this.progress = progress
    }

    static async all() {
        const [skills] = await db.query('SELECT * FROM skills')
        return skills.map((item) => new this(item.id, item.name, item.progress))
    }
}

module.exports = Skill
