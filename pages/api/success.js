export default function handler(req, res) {
  if (req.method === 'POST') {
    const { params } = req.query;
    return res.redirect(304, `https://vincode.az/success?params=${params}`);
  }
}
