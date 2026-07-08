const fs = require('fs');
const path = require('path');

const pages = [
  'AboutPage.tsx',
  'ArticlePage.tsx',
  'BlogsPage.tsx',
  'CareerDetailedDesignerPage.tsx',
  'CareerDetailedInternPage.tsx',
  'CareerDetailedPage.tsx',
  'CareerDetailedSearchPage.tsx',
  'CareersPage.tsx',
  'ContactPage.tsx',
  'PostXPage.tsx',
  'ServiceDigitalAdvertising.tsx',
  'ServiceLocationListing.tsx',
  'ServiceOnlineReputation.tsx',
  'ServiceSocialMedia.tsx',
  'ServiceWebsiteDev.tsx',
  'ServicesPage.tsx'
];

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');
const pagesDir = path.join(srcDir, 'pages');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir);
}

// 1. Move files and update their internal imports
pages.forEach(page => {
  const oldPath = path.join(componentsDir, page);
  const newPath = path.join(pagesDir, page);

  if (fs.existsSync(oldPath)) {
    let content = fs.readFileSync(oldPath, 'utf8');

    // Update relative imports to other components
    // E.g., import Navbar from './Navbar' -> import Navbar from '../components/Navbar'
    // E.g., import { ArrowLeft } from 'lucide-react' -> unchanged
    // E.g., import heroBanner from '../images/...' -> unchanged
    content = content.replace(/from\s+['"]\.\/([^'"]+)['"]/g, "from '../components/$1'");
    
    // Some imports might not use 'from', like lazy imports if any, but they usually don't exist inside pages.
    // Let's also check dynamic imports just in case: import('./...)
    content = content.replace(/import\(['"]\.\/([^'"]+)['"]\)/g, "import('../components/$1')");

    fs.writeFileSync(newPath, content, 'utf8');
    fs.unlinkSync(oldPath);
    console.log(`Moved ${page} to src/pages/ and updated its internal imports.`);
  } else {
    console.warn(`File not found: ${oldPath}`);
  }
});

// 2. Update App.tsx
const appPath = path.join(srcDir, 'App.tsx');
if (fs.existsSync(appPath)) {
  let appContent = fs.readFileSync(appPath, 'utf8');

  pages.forEach(page => {
    const pageName = page.replace('.tsx', '');
    
    // Replace import statements in App.tsx
    // E.g., const PostXPage = lazy(() => import('./components/PostXPage')); -> ./pages/PostXPage
    // E.g., import AboutPage from './components/AboutPage'; -> ./pages/AboutPage
    const regex1 = new RegExp(`from\\s+['"]\\.\\/components\\/${pageName}['"]`, 'g');
    appContent = appContent.replace(regex1, `from './pages/${pageName}'`);

    const regex2 = new RegExp(`import\\(['"]\\.\\/components\\/${pageName}['"]\\)`, 'g');
    appContent = appContent.replace(regex2, `import('./pages/${pageName}')`);
  });

  fs.writeFileSync(appPath, appContent, 'utf8');
  console.log('Updated src/App.tsx imports.');
}
