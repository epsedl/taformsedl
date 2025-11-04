import allowCors from './_cors';
import authRoutes from '../routes/auth';
import express from 'express';

const app = express();
app.use(express.json());

// Attach your auth routes
app.use('/api/auth', authRoutes);

function handler(req, res) {
  // Let Express handle the request
  app(req, res);
}

export default allowCors(handler);