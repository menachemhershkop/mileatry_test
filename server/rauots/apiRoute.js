import express from 'express';
import jwt from 'jsonwebtoken';
import run from '../db/connect.js';

export const apiRoute = express();
const db = run()
apiRoute.get('/launchers',async (req, res)=>{
    res.send(await db.then(data=> data.find({}).toArray()))
})
apiRoute.post('/launchers',async (req, res)=>{
    console.log(req.body);
    
    const {id,city,rocketType,latitude,longitude,name} = req.body
    if (id,!city,!rocketType,!latitude,!longitude,!name){
        res.status(401).json({msg: 'Requyemnts felds less'})
    }
    else{
        const resuilt  = await db.then(data=> data.insertOne({id:id,city:city,rocketType:rocketType,latitude:latitude,longitude:longitude,name:name}))
        console.log(resuilt.insertedId);
        
    }
})
apiRoute.get('/launchers/:id', (req, res)=>{
    
})
apiRoute.delete('/launchers:id', (req, res)=>{
    
})