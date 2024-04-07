export default function handler(req, res) {
  const { params } = req.query;
  res.redirect(`/success?params=${params}`);
}
