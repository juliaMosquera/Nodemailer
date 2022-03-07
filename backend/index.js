import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

import routesEmail from './routes/routesEmail.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/email', routesEmail);
app.listen(process.env.PORT, () =>
  console.log('Backend server running on port: ', process.env.PORT)
);
