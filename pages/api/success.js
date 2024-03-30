export default function handler(req, res) {
  const { params } = req.query;
  return res.redirect(307, `https://vincode.az/success?params=${params}`);
}
