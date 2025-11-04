const corsMiddleware = (req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    res.header('Access-Control-Allow-Origin', 'https://taformsed.netlify.app');
  } else {
    res.header('Access-Control-Allow-Origin', '*');
  }
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-jwt-token');
  res.header('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
};

module.exports = corsMiddleware;
