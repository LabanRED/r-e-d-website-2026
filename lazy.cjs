const fs = require('fs');
const path = require('path');

const dir = './src/components';
const exclude = ['Hero.tsx', 'Navbar.tsx', 'LogoCarousel.tsx'];

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && !exclude.includes(f));

let modifiedCount = 0;
files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let changed = false;
  const newContent = content.replace(/<img\s+([^>]+)>/g, (match, props) => {
    if (props.includes('loading=')) return match;
    changed = true;
    return '<img loading="lazy" ' + props + '>';
  });

  if (changed) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    modifiedCount++;
    console.log('Added lazy loading to:', file);
  }
});
console.log('Total files modified:', modifiedCount);
