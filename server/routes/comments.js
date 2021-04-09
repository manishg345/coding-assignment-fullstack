import express from 'express';
import mongoose from 'mongoose';
const router  = express.Router();
import { getComments } from '../controllers/comments.js';

router.get('/',getComments);

export default router;