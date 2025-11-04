import allowCors from './_cors';

function handler(req, res) {
  res.json({ message: 'Hello from serverless API with CORS!' });
}

export default allowCors(handler);