const express = require('express');
const axios = require('axios');
const app = express();

const m3uUrl = 'http://dream4k.co:80/get.php?username=tni5znb1y3&password=q2lspqsb3i&type=m3u_plus&output=ts';

app.get('/m3u', async (req, res) => {
  try {
    const response = await axios.get(m3uUrl, {
      headers: {
        'User-Agent': 'VLC/3.0.11 LibVLC/3.0.11',
        'Referer': 'http://dream4k.co'
      },
      responseType: 'text'
    });
    res.setHeader('Content-Type', 'application/x-mpegURL');
    res.send(response.data);
  } catch (err) {
    res.status(500).send('فشل جلب الملف من السيرفر');
  }
});

app.get('/', (req, res) => {
  res.send('✅ البروكسي يعمل – استخدم /m3u لجلب القنوات');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
