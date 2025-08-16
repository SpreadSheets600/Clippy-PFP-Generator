const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
const manifest = {};

fs.readdirSync(assetsDir, { withFileTypes: true }).forEach(dirent => {
  if (dirent.isDirectory()) {
    const folder = dirent.name;
    const files = fs.readdirSync(path.join(assetsDir, folder))
      .filter(f => f.endsWith('.png'));
    manifest[folder] = files;
  }
});

fs.writeFileSync(
  path.join(__dirname, 'manifest.json'),
  JSON.stringify(manifest, null, 2)
);

console.log('manifest.json generated!');