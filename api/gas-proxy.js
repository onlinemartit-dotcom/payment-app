export default async function handler(req, res) {
  const GAS_URL = 'https://script.google.com/macros/s/AKfycbzHOkizp8PQdP1sw1_2sna5rulM4H-0VQ3eTp3rTw4O3Q7XerbQ0o4_PYIvjwL6XQRnRg/exec?action=data';
  try {
    const response = await fetch(GAS_URL);
    const data = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
