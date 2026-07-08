const fs = require('fs');
const path = require('path');
const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

let modifiedFiles = 0;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // Regex to find button className attributes
  const buttonRegex = /<button[^>]*className=["']([^"']+)["'][^>]*>/g;
  
  newContent = newContent.replace(buttonRegex, (match, classStr) => {
    let classes = classStr.split(/\s+/).filter(c => c.trim() !== '');
    
    // Remove conflicting classes
    classes = classes.filter(c => !['font-sans', 'font-serif', 'font-mono', 'font-semibold', 'font-bold', 'font-normal', 'font-regular', 'font-light', 'uppercase', 'capitalize', 'lowercase'].includes(c));
    
    // Add required classes
    if (!classes.includes('font-poppins')) classes.push('font-poppins');
    if (!classes.includes('font-medium')) classes.push('font-medium');
    if (!classes.includes('lowercase')) classes.push('lowercase');
    
    return match.replace(classStr, classes.join(' '));
  });

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    modifiedFiles++;
    console.log('Updated ' + file);
  }
});

console.log('Modified ' + modifiedFiles + ' files.');
