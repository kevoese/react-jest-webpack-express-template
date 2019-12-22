import sampleRouter from './sample';

export default app => {
  app.use('/api', sampleRouter);
};
