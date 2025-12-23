export default async function handler(req, res) {
  const GAS_URL = 'https://script.google.com/macros/s/AKfycbzHOkizp8PQdP1sw1_2sna5rulM4H-0VQ3eTp3rTw4O3Q7XerbQ0o4_PYIvjwL6XQRnRg/exec?action=data';

  try {
    const response = await fetch(GAS_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch from Google Apps Script');
    }
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');  // CORS
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
