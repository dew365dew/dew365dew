const express = require('express');
const app = express();

// Route หลักที่ root
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// เส้นทางอื่น ๆ ที่คุณต้องการ
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];
  res.json(users);
});

// Export the app for Vercel to handle
module.exports = app;

