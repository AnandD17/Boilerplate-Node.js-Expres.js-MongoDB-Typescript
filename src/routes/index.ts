import notes from './notes';
import express from 'express';

const router = express.Router();

router.use('/notes', notes);


export default router;