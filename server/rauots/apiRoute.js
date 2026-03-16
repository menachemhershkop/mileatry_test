import express from 'express';
import jwt from 'jsonwebtoken';
import run from '../db/connect.js';

export const apiRoute = express();
const db = run()
apiRoute.get('/launchers', async (req, res) => {
    res.send(await db.then(data => data.find({}).toArray()))
})
apiRoute.post('/launchers', async (req, res) => {

    const { id, city, rocketType, latitude, longitude, name } = req.body


    if (!city, !rocketType, !latitude, !longitude, !name) {
        res.status(401).json({ msg: 'Requyemnts felds less' })
    }
    else {
        const resuilt = await db.then(data => data.insertOne({ id: id, city: city, rocketType: rocketType, latitude: latitude, longitude: longitude, name: name }))
        res.status(201).json({ msg: resuilt.insertedId })
    }
})
apiRoute.get('/launchers/:id', async (req, res) => {
    const param = Number(req.params.id)

    const finder = await db.then(data => data.find({ id: param }).toArray())
    if (finder.length === 0) {

        res.status(404).json({ msg: 'id not found' })
    }
    else {
  
        res.status(200).json({ masger: finder })
    }
})
apiRoute.delete('/launchers/:id', async (req, res) => {
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