import 'dotenv/config';
import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
  console.log(`🚀 Server running on port ${PORT}`);
});