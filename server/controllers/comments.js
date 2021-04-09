import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import mongoose from 'mongoose';
import Comment from '../models/post.js';
import request from 'request';
const API_URL    = process.env.API_URL;

export const getComments = (req,res)=>{
   try {
    Comment.find({}, function (err, docs) {
        res.status(200).json(docs);
      });
   
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
}