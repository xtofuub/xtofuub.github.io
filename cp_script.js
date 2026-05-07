const fs = require('fs');
const path = require('path');

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursive(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    if (dest.endsWith('metadata.json')) return;
    fs.copyFileSync(src, dest);
  }
}

// Current working dir is assumed to be project root because npx runs there
copyRecursive('temp-repo', '.');
console.log('Copy complete!');
