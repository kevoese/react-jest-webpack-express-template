import app from './server';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
  });

export default app;