// tests/test-audio.js
const https = require('https');

function testUrl(name, url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      console.log(`[${name}] Status: ${res.statusCode}, Type: ${res.headers['content-type']}, Length: ${res.headers['content-length']}`);
      if (res.statusCode === 200) resolve(true);
      else reject(new Error(`${name} failed with status ${res.statusCode}`));
    }).on('error', reject);
  });
}

async function run() {
  const words = ['你好', '爸爸', '爱', '高兴', '电脑'];
  for (const w of words) {
    const youdaoUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(w)}&le=zh`;
    await testUrl('Youdao: ' + w, youdaoUrl);
  }
  console.log('All online audio streams verified successfully!');
}

run().catch(err => {
  console.error('Audio test failed:', err);
  process.exit(1);
});
