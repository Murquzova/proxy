export default function handler(req, res) {
  const { params } = req.query;
  return res.redirect(`/success?params=${params}`);
}
