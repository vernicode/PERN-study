const db = require('../db')

const UserModel = {
    create: async function(name, surname) {
        const newPerson = await db.query(`INSERT INTO "Users" (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        
        return newPerson.rows
    },

    getUsers: async function() {
        const allPersons = await db.query(`SELECT * FROM "Users"`)

        return allPersons.rows
    },
    getUser: async function(id) {
        const onePerson = await db.query(`SELECT * FROM "Users" WHERE id_u = $1`, [ id ])

        return onePerson.rows
    },
    updUser: async function(id, name, surname) {
        const updatePerson = await db.query(`UPDATE "Users" SET name = $1, surname = $2 WHERE id_u = $3 RETURNING *`, [ name, surname, id ])

        return updatePerson.rows
    },
    destroy: async function(id) {
        const destroyPerson = await db.query(`DELETE FROM "Users" WHERE id_u = $1`, [ id ])
        
        return destroyPerson.rows
    }
}

module.exports = UserModel