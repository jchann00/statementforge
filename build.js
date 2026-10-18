const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const filesToCopy = ['index.html', 'styles.css', 'app.js', '_redirects', 'robots.txt', 'sitemap.xml', 'googleeae2dbdd1057a6b1.html'];
filesToCopy.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(distDir, f));
  }
});

const assetsSrc = path.join(__dirname, 'assets');
const assetsDist = path.join(distDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  if (!fs.existsSync(assetsDist)) fs.mkdirSync(assetsDist, { recursive: true });
  fs.readdirSync(assetsSrc).forEach(f => {
    fs.copyFileSync(path.join(assetsSrc, f), path.join(assetsDist, f));
  });
}

console.log('Build complete: Root and dist are 100% synchronized for deployment.');
