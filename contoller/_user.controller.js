const db = require('../db')
const User = require("../models/user.model.js");

class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body
        const newPerson = await User.create(name, surname)

        res.json(newPerson)
    }
    async getUsers(req, res) {
        const allPersons = await User.getUsers()
        
        res.json(allPersons)
    }
    async getOneUser(req, res) {
        const {id} = req.params
        const onePerson = await User.getUser(id)
       
        res.json(onePerson)
    }
    async updateUser(req, res) {
        const {id} = req.params
        const {name, surname} = req.body
        
        const updatePerson = await User.updUser(id, name, surname)
        res.json(updatePerson)
    }
    async destroyUser(req, res) {
        const {id} = req.params
        const destroyPerson = await User.destroy(id)
        
        res.json({'result': 'ok'})
    }
}

module.exports = new UserController()