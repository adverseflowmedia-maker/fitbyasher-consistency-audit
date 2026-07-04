export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { email, first_name } = req.body
  try {
    const response = await fetch('https://api.convertkit.com/v3/forms/9615127/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: '92flaYD2pveEAMoH-ZdP4Q',
        email,
        first_name
      })
    })
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: 'Subscription failed' })
  }
}
