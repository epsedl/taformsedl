// backend/api/_cors.js
export default function allowCors(handler) {
  return async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://taformsed.netlify.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
    return handler(req, res);
  };
}
