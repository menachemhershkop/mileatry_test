import express from 'express';
import run from '../db/connect.js';
import { User } from '../modules/userModel.js';

export const authRoute = express();
const db = run().then((data) => data.collection('users'))

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

authRoute.post('/login', (req, res) => {

})

authRoute.get('/getUser', (res, req) => {

})