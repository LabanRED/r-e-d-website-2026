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

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Find all buttons or links that contain "schedule a meeting today"
  // A safe way: regex that captures class="...", any characters (non-greedy), then the text
  let regex = /class="([^"]*)"([^>]*>[^<]*?)(schedule a meeting today)/ig;
  
  content = content.replace(regex, (match, classContent, middleContent, matchText) => {
    let newClass = classContent.replace(/hover:bg-\[#1ca3c4\]/g, 'btn-slide-in');
    newClass = newClass.replace(/active:bg-\[#1ca3c4\]/g, '');
    
    // Some buttons might just have hover:bg-black, or similar. Just strip hover:bg-* if any and add btn-slide-in
    if (!newClass.includes('btn-slide-in')) {
      newClass = newClass.replace(/hover:bg-[a-zA-Z0-9-\[\]#]+/g, '');
      newClass += ' btn-slide-in';
    }
    
    // collapse spaces
    newClass = newClass.replace(/\s+/g, ' ').trim();
    
    return `class="${newClass}"${middleContent}${matchText}`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    updatedCount++;
    console.log('Updated ' + file);
  }
}
console.log('Total files updated: ' + updatedCount);
