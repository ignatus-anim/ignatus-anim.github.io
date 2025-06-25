import { publish } from 'gh-pages';
import fs from 'fs';

// Ensure CNAME exists in dist
if (fs.existsSync('CNAME')) {
  fs.copyFileSync('CNAME', 'dist/CNAME');
  console.log('CNAME file copied to dist folder');
}

// Deploy to GitHub Pages
publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/ignatus-anim/ignatus-anim.github.io.git',
  message: 'Deploy to GitHub Pages',
  dotfiles: true, // Include dotfiles like .nojekyll
}, (err) => {
  if (err) {
    console.error('Error deploying to GitHub Pages:', err);
    return;
  }
  console.log('Successfully deployed to GitHub Pages!');
});