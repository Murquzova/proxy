export default function handler(req, res) {
  const { params } = req.query;
  return res.redirect(304, `https://vincode.az/success?params=${params}`);
}
