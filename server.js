const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/m3u', async (req, res) => {
  const url = "http://dream4k.co:80/get.php?username=tni5znb1y3&password=q2lspqsb3i&type=m3u_plus&output=ts";
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'http://dream4k.co'
      }
    });
    const text = await response.text();
    res.setHeader('Content-Type', 'text/plain');
    res.send(text);
  } catch (err) {
    res.status(500).send("فشل تحميل الملف");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ البروكسي يعمل على http://localhost:${port}/m3u`);
});
