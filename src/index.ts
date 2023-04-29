// Required External Modules

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import validdateEnv from '@/utils/validateEnv';

// App Variables

dotenv.config();

validdateEnv();

const port = process.env.PORT;

// App configuration

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Server Activation

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
