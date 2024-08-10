const express = require('express');
const app = express();
const port = 3000;
// const port = 223.206.251.195;

// Route หลักที่ root
app.get('/', (req, res) => {
  res.send('Hello World!');
});



// เริ่มต้นเซิร์ฟเวอร์
app.listen(port,  () => { // '0.0.0.0' หมายถึงฟังทุก interface รวมถึง external IP
    console.log(`Server is running on http://localhost:${port}`);
  });
