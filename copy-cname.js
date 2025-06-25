import fs from 'fs';

// Copy CNAME file to dist directory
try {
  fs.copyFileSync('CNAME', 'dist/CNAME');
  console.log('CNAME file copied to dist folder');
} catch (err) {
  console.error('Error copying CNAME file:', err);
}