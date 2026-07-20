const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.vue')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let updatedCount = 0;

const excludeFiles = ['Hero.vue'];

for (const file of files) {
  if (excludeFiles.some(ex => file.endsWith(ex))) continue;

  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace v-motion-blur-up with standard v-motion and inline props
  let regex = /<(h[1-3])(\s+v-motion-blur-up)([^>]*?)>/ig;

  content = content.replace(regex, (match, tag, vmotion, attributes) => {
    return `<${tag} v-motion :initial="{ opacity: 0, y: 30, filter: 'blur(10px)' }" :visible-once="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 600, type: 'keyframes', ease: 'easeOut' } }"${attributes}>`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    updatedCount++;
    console.log(`Updated ${file}`);
  }
}
console.log(`Total files updated: ${updatedCount}`);
