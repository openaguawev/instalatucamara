const fs = require('fs');
const { execSync } = require('child_process');

if (!fs.existsSync('public/images')) {
  fs.mkdirSync('public/images', { recursive: true });
}

const svg = `<svg width='400' height='400' xmlns='http://www.w3.org/2000/svg'>
  <rect width='400' height='400' fill='#E2E8F0'/>
  <text x='50%' y='50%' font-family='sans-serif' font-size='20' fill='#64748B' text-anchor='middle' dominant-baseline='middle'>Imagen no disponible</text>
</svg>`;

fs.writeFileSync('temp.svg', svg);

try {
  const sharp = require('sharp');
  sharp('temp.svg').webp().toFile('public/images/product-placeholder.webp')
    .then(() => {
      console.log('Image generated.');
      fs.unlinkSync('temp.svg');
    });
} catch (e) {
  console.log('Installing sharp...');
  execSync('npm install --no-save sharp');
  const sharp = require('sharp');
  sharp('temp.svg').webp().toFile('public/images/product-placeholder.webp')
    .then(() => {
      console.log('Image generated.');
      fs.unlinkSync('temp.svg');
    });
}
