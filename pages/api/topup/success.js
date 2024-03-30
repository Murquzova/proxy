export default function handler(req, res) {
  const { params } = req.query;
  res.redirect(307, `https://vincode.az/success?params=${params}`);
}
