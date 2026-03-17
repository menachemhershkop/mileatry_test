import express from 'express';
import run from '../db/connect.js';
import { User } from '../modules/userModel.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config'
import { authToken } from '../middeleware/authToken.js';
import { adminConnect } from '../middeleware/adminConnect.js';

export const authRoute = express();
const db = run().then((data) => data.collection('users'))
const secret = process.env.SECRET

authRoute.post('/register/create', authToken, adminConnect, async (req, res) => {
    const { id, username, password, email, user_type, } = req.body

    if (!username, !password, !email, !user_type) {
        return res.status(401).json({ msg: 'Imported filed less' })
    }
    const finder = await db.then((data) => data.find({ username: username }).toArray())

    if (finder.length >= 1) {
        return res.status(401).json({ msg: 'username already exist' })
    }
    const create = await db.then((data) => data.insertOne(new User(id, username, password, email, user_type)))
    res.status(201).json({ user: create.insertedId })
})

authRoute.put('/register/update/:id', authToken, adminConnect, async (req, res) => {
    const param = Number(req.params.id)    
    const finder = await db.then(data => data.find({ id: param }).toArray())
    if (finder.length === 0) {
        res.status(404).json({ msg: 'id not found' })
    }
    else {
        const update = await db.then(data => data.updateOne({ id: param }, { $set: req.body }))

        res.status(200).json({ msg: update.upsertedId })
    }
})

authRoute.delete('/register/delete/:id', authToken, adminConnect, async (req, res) => {
    
    const param = Number(req.params.id)
    const finder = await db.then(data => data.find({ id: param }).toArray())
    if (finder.length === 0) {
        return res.status(404).json({ message: 'id not found' })
    }
    else {
        const del = await db.then(data => data.deleteOne({ id: param }))
        res.status(200).json({ msg: del.deletedCount })
    }
})

authRoute.post('/login', async (req, res) => {

    const { username, password } = req.body;


    if (!username || !password) {

        res.status(400).json({ message: "username and password are required" })
    }
    const agent = await db.then(data => data.find({ username: username, password: password }).toArray())
    if (agent.length === 0) {


        return res.status(401).json({ message: "Invalid credentials" });
    }
    const lest = { last_login: Date() }
    const update = await db.then(data => data.updateOne({ username: username }, { $set: lest }))

    const paylod = { agent: agent }
    const token = jwt.sign(paylod, secret, { expiresIn: '15m' })
    res.status(200).json({ token , rank:agent[0].user_type})


})

authRoute.get('/getUser', authToken, (req, res) => {

    return res.status(200).json(req.user['agent'][0])
})

authRoute.get('/users', authToken, adminConnect, async (req, res) => {
    res.send(await db.then(data => data.find({}).toArray()))
})