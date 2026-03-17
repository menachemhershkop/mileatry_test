import express from 'express';
import cors from 'cors';
import { apiRoute } from './rauots/apiRoute.js';
import { authRoute } from './rauots/authRoute.js';

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.send('wellcome')
})

app.use('/api', apiRoute)

app.use('/api/auth', authRoute)




app.listen(3000, ()=>{
    console.log('system working');
    
})