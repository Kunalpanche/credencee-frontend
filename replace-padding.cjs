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
      if(file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src/pages');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  content = content.replace(/className="([^"]*)\bpy-24\b([^"]*)"/g, 'className="$1py-16 md:py-24$2"');
  content = content.replace(/className="([^"]*)\bpy-32\b([^"]*)"/g, 'className="$1py-20 md:py-32$2"');
  content = content.replace(/className="([^"]*)\bpy-16\b([^"]*)"/g, 'className="$1py-10 md:py-16$2"');
  content = content.replace(/className="([^"]*)\bp-16\b([^"]*)"/g, 'className="$1p-8 md:p-16$2"');
  content = content.replace(/className="([^"]*)\bp-24\b([^"]*)"/g, 'className="$1p-10 md:p-24$2"');
  if(content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
