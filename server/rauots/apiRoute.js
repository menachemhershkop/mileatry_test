import express from 'express';
import run from '../db/connect.js';
import { launcher } from '../modules/launcherModel.js';
import { authToken } from '../middeleware/authToken.js';
import { Intelligence } from '../middeleware/IntelligenceConncect.js';
import { adminConnect } from '../middeleware/adminConnect.js';

export const apiRoute = express();
const db = run().then(data => { data.collection('racet') })
apiRoute.get('/launchers', authToken, async (req, res) => {
    res.send(await db.then(data => data.find({}).toArray()))
})

apiRoute.post('/launchers', authToken, Intelligence||adminConnect, async (req, res) => {

    const { id, city, rocketType, latitude, longitude, name } = req.body


    if (!city, !rocketType, !latitude, !longitude, !name) {
        res.status(401).json({ msg: 'Requyemnts felds less' })
    }
    else {
        const resuilt = await db.then(data => data.insertOne(new launcher(id, name, rocketType, latitude, longitude, city)))
        res.status(201).json({ msg: resuilt.insertedId })
    }
})

apiRoute.get('/launchers/:id', authToken, async (req, res) => {
    const param = Number(req.params.id)

    const finder = await db.then(data => data.find({ id: param }).toArray())
    if (finder.length === 0) {

        res.status(404).json({ msg: 'id not found' })
    }
    else {

        res.status(200).json({ masger: finder })
    }
})

apiRoute.delete('/launchers/:id', authToken, Intelligence || adminConnect, async (req, res) => {
    const param = Number(req.params.id)
    const finder = await db.then(data => data.find({ id: param }).toArray())
    if (finder.length === 0) {
        res.status(404).json({ msg: 'id not found' })
    }
    else {
        const del = await db.then(data => data.deleteOne({ id: param }))
        res.status(200).json({ msg: del.deletedCount })
    }
})

apiRoute.put('/launchers/:id', authToken, Intelligence || adminConnect, async (req, res) => {
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