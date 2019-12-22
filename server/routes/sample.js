import express from 'express';
import sample from '../controller/sample';

const sampleRouter = express.Router();


sampleRouter.get('/sample', sample);

export default sampleRouter;
