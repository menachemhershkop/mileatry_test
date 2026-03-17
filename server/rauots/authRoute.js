import express from 'express';
import run from '../db/connect.js';
import { User } from '../modules/userModel.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config'

export const authRoute = express();
const db = run().then((data) => data.collection('users'))
const secret = process.env.SECRET

authRoute.post('/register/create', async (req, res) => {
    const {id, username, password, email, user_type, } = req.body
    if (!username, !password, !email, !user_type) {
        return res.status(401).json({ msg: 'Imported filed less' })
    }
    const create = await db.then((data) => data.insertOne(new User(id, username, password, email, user_type)))
    res.status(201).json({user:create.insertedId})
})

authRoute.put('/register/update/:id', async (req, res) => {
    const param = Number(req.params.id)
    const finder = await db.then(data => data.find({ id: param }).toArray())
    if (finder.length === 0) {
        res.status(404).json({ msg: 'id not found' })
    }
    else {
        const update = await db.then(data => data.updateOne({ id: param },{$set:req.body}))

        res.status(200).json({ msg: update.upsertedId })
    }
})

authRoute.delete('/register/delete/:id', async (req, res) => {
    const param = req.params.id
    const finder = await db.then(data => data.find({ id: param }).toArray())
    if (finder.length === 0) {
        res.status(404).json({ msg: 'id not found' })
    }
    else {
        const del = await db.then(data => data.deleteOne({ id: param }))
        res.status(200).json({ msg: del.deletedCount })
    }
})

authRoute.post('/login', async (req, res) => {
    
    const {username, password} = req.body;
    if (!username || !password){
        res.status(400).json({message: "username and password are required"})
    }
    const agent = await db.then(data => data.find({ username: username ,password:password}).toArray())
    if (agent.length === 0){
       return res.status(401).json({ message: "Invalid credentials" });
    }
    const paylod={agent:agent}
    const token = jwt.sign(paylod, secret, {expiresIn:'15m'})
    res.status(200).json({token, agent})


})

authRoute.get('/getUser', (req, res) => {
        const {username, email, user_type, lest_login} = req.body;
        return res.status(200).json({user_type,username, email, lest_login})
})