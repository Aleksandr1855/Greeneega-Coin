import sharp from 'sharp';

const src = 'public/favicon.svg';
const targets = [
  { size: 32, out: 'public/favicon-32x32.png' },
  { size: 180, out: 'public/apple-touch-icon.png' },
  { size: 512, out: 'public/icon-512x512.png' },
];

async function run() {
  try {
    const results = [];
    for (const t of targets) {
      await sharp(src)
        .resize(t.size, t.size, { fit: 'contain', background: { r: 10, g: 15, b: 10, alpha: 1 } })
        .png({ quality: 92 })
        .toFile(t.out);
      results.push(`✔ generated ${t.out} (${t.size}x${t.size})`);
    }
    console.log(results.join('\n'));
  } catch (err) {
    console.error('Icon generation failed:', err);
    process.exit(1);
  }
}

run();