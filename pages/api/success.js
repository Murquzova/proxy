export default function handler(req, res) {
  const { params } = req.query;
  return res.redirect(`https://vincode.az/success?params=${params}`);
}
