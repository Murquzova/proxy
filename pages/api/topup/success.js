export default function handler(req, res) {
  const { params } = req.query;
  res.redirect(304, `https://vincode.az/success?params=${params}`);
}
