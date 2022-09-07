const db = require('../db')
class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body
        const newPerson = await db.query(`INSERT INTO "Users" (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        
        res.json(newPerson.rows)
    }
    async getUsers(req, res) {
        const allPersons = await db.query(`SELECT * FROM "Users"`)
        
        res.json(allPersons.rows)
    }
    async getOneUser(req, res) {
        const {id} = req.params
        const onePerson = await db.query(`SELECT * FROM "Users" WHERE id_u = $1`, [ id ])
       
        res.json(onePerson.rows)
    }
    async updateUser(req, res) {
        const {id} = req.params
        const {name, surname} = req.body
        const updatePerson = await db.query(`UPDATE "Users" SET name = $1, surname = $2 WHERE id_u = $3 RETURNING *`, [ name, surname, id ])
        res.json(updatePerson.rows)
    }
    async destroyUser(req, res) {
        const {id} = req.params
        const destroyPerson = await db.query(`DELETE FROM "Users" WHERE id_u = $1`, [ id ])
        res.json({'result': 'ok'})
    }
}

module.exports = new UserController()