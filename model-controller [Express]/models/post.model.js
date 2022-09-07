// const db = require('../db')

// const PostModel = {
//     create: async function(title, description) {
//         const newPost = await db.query(`INSERT INTO "Posts" (title, description) values ($1, $2) RETURNING *`, [title, description])
        
//         return newPost.rows
//     },

//     getUsers: async function() {
//         const allPersons = await db.query(`SELECT * FROM "Posts"`)

//         return allPersons.rows
//     },
//     getUser: async function(id) {
//         const onePerson = await db.query(`SELECT * FROM "Posts" WHERE id_p = $1`, [ id ])

//         return onePerson.rows
//     },
//     updUser: async function(id, title, description) {
//         const updatePerson = await db.query(`UPDATE "Posts" SET title = $1, description = $2 WHERE id_p = $3 RETURNING *`, [ title, description, id ])

//         return updatePerson.rows
//     },
//     destroy: async function(id) {
//         const destroyPerson = await db.query(`DELETE FROM "Posts" WHERE id_p = $1`, [ id ])
        
//         return destroyPerson.rows
//     }
// }