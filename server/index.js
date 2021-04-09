import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import request from 'request';
import Comment from './models/post.js';
import commentRoutes from './routes/comments.js';
import cors from 'cors';

const app        = express();
const API_URL    = process.env.API_URL;

request.get(API_URL,(error,response,body)=>{
    if(error){
        return console.dir(error)
    }
   
     body = JSON.parse(body);
    body.forEach(data =>{
        const instance       = new Comment();
        instance.postId= data.postId;
        instance.id    = data.id;
        instance.name  = data.name;
        instance.email = data.email;
        instance.body  = data.body;

        try {
            instance.save(function (err) {
                console.log(err.message);
              });
        } catch (error) {
          console.log(error.message);
        }
       
    })
    
})
app.use(cors());
app.use('/comments',commentRoutes);
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> app.listen(PORT, ()=>{
            console.log(`Server running on port: ${PORT}`)
        }))
        .catch((error)=>{
            console.log(error.message);
        })

mongoose.set('useFindAndModify', false);