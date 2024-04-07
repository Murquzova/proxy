export default function handler(req, res) {
  const { params } = req.query;
  res.redirect(`https://vincode.az/success?params=${params}`);
}
