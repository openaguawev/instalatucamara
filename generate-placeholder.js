const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const images = [
  { file: 'gadnic-camera.webp',  bg: '#0A2540', text: 'Gadnic',      sub: 'Cámara WiFi 1080p' },
  { file: 'gadnic-kit.webp',     bg: '#0A2540', text: 'Gadnic Kit',  sub: 'Kit 4 Cámaras + DVR' },
  { file: 'hikvision-dvr.webp',  bg: '#CC0000', text: 'Hikvision',   sub: 'DVR 8 Canales 1080p' },
  { file: 'ezviz-camera.webp',   bg: '#0066CC', text: 'Ezviz',       sub: 'By Hikvision — WiFi' },
  { file: 'geotek-kit.webp',     bg: '#1A5C2A', text: 'Geotek',      sub: 'Kit 4 Cámaras WiFi' },
];

function makeSvg(bg, text, sub) {
  return `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="${bg}"/>
  <rect x="30" y="110" width="340" height="80" rx="8" fill="rgba(255,255,255,0.08)"/>
  <text x="200" y="158" font-family="Arial, sans-serif" font-size="36" font-weight="bold"
        fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
  <text x="200" y="218" font-family="Arial, sans-serif" font-size="16"
        fill="rgba(255,255,255,0.7)" text-anchor="middle">${sub}</text>
  <circle cx="200" cy="60" r="30" fill="rgba(255,255,255,0.12)"/>
  <text x="200" y="67" font-family="Arial, sans-serif" font-size="28"
        fill="white" text-anchor="middle" dominant-baseline="middle">&#128247;</text>
</svg>`;
}

async function run() {
  let sharp;
  try { sharp = require('sharp'); }
  catch(e) {
    const { execSync } = require('child_process');
    console.log('Installing sharp...');
    execSync('npm install --no-save sharp');
    sharp = require('sharp');
  }

  for (const img of images) {
    const svg = Buffer.from(makeSvg(img.bg, img.text, img.sub));
    const outPath = path.join(outDir, img.file);
    await sharp(svg).resize(400, 300).webp({ quality: 85 }).toFile(outPath);
    console.log(`✓ Generated ${img.file}`);
  }
  console.log('All images generated.');
}

run().catch(console.error);
