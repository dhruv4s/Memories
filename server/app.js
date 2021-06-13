import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import requestRoute from './routes/routes.js'

const app = express();
dotenv.config();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/api',requestRoute);
const PORT = process.env.PORT || 9001 ;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Server running on port: ${PORT}`);
        });
    })
    .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);