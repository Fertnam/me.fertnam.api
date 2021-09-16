const db = require('../db')

class Personal {
    static #id = 'Fertnam';

    constructor(avatar, description) {
        this.avatar = avatar
        this.description = description
    }

    static async get() {
        const sql = `SELECT avatar, description FROM personal WHERE id = '${this.#id}'`
        const [[personal]] = await db.query(sql)

        return new this(personal.avatar, personal.description)
    }
}

module.exports = Personal
