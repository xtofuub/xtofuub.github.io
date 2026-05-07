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
    // skip certain files, e.g., package.json if you don't want to overwrite, but the user explicitly
    // said "update the project to the latest, it doesnt contain everything"
    // I should probably skip package.json if it's vastly different? Or just overwrite everything.
    // Let's overwrite everything except metadata.json possibly.
    if (dest.endsWith('metadata.json')) return;
    fs.copyFileSync(src, dest);
  }
}

copyRecursive('temp-repo', '.');
console.log('Copy complete!');
