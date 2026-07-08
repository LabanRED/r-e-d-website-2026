const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/ServiceDigitalAdvertising.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update PlatformCard and Arrays
content = content.replace(
  /const socialPlatforms = \[[\s\S]*?\];/,
  `const socialPlatforms = [
  { name: 'Facebook', defaultImg: fbDefault, hoverImg: fbHover, id: 'facebook-instagram' },
  { name: 'Instagram', defaultImg: igDefault, hoverImg: igHover, id: 'facebook-instagram' },
  { name: 'Google', defaultImg: googleDefault, hoverImg: googleHover, id: 'google' },
  { name: 'LinkedIn', defaultImg: linkedinDefault, hoverImg: linkedinHover, id: 'linkedin' },
  { name: 'TikTok', defaultImg: tiktokDefault, hoverImg: tiktokHover, id: 'tiktok' },
];`
);

content = content.replace(
  /const communicationPlatforms = \[[\s\S]*?\];/,
  `const communicationPlatforms = [
  { name: 'SMS', defaultImg: smsDefault, hoverImg: smsHover, id: 'sms' },
  { name: 'Email', defaultImg: emailDefault, hoverImg: emailHover, id: 'email' },
];`
);

content = content.replace(
  /const PlatformCard: React\.FC<\{ platform: any \}> = \(\{ platform \}\) => \([\s\S]*?\);/,
  `const PlatformCard: React.FC<{ platform: any }> = ({ platform }) => (
  <a href={\`#\${platform.id}\`} onClick={(e) => {
    e.preventDefault();
    const target = document.getElementById(platform.id);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }} className="relative cursor-pointer group w-[160px] h-[100px] sm:w-[200px] sm:h-[130px] flex-shrink-0">
    <img loading="lazy" src={platform.defaultImg}
      alt={platform.name}
      className="absolute inset-0 m-auto w-[90%] h-[85%] object-contain transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0"
    />
    <img loading="lazy" src={platform.hoverImg}
      alt={\`\${platform.name} Hover\`}
      className="absolute inset-0 m-auto w-full h-full object-contain transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
    />
  </a>
);`
);

// 2. Add IDs to sections
content = content.replace(
  /<section className="px-6 sm:px-8 lg:px-12 py-2 max-w-\[1600px\] mx-auto">\s*<h2[^>]*>\s*Facebook/g,
  `<section id="facebook-instagram" className="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">\n        <h2 className="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">\n          Facebook`
);

content = content.replace(
  /<section className="px-6 sm:px-8 lg:px-12 py-2 max-w-\[1600px\] mx-auto">\s*<h2[^>]*>\s*Google/g,
  `<section id="google" className="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">\n        <h2 className="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">\n          Google`
);

content = content.replace(
  /<section className="px-6 sm:px-8 lg:px-12 py-2 max-w-\[1600px\] mx-auto">\s*<h2[^>]*>\s*LinkedIn/g,
  `<section id="linkedin" className="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">\n        <h2 className="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">\n          LinkedIn`
);

content = content.replace(
  /<section className="px-6 sm:px-8 lg:px-12 py-2 max-w-\[1600px\] mx-auto">\s*<h2[^>]*>\s*TikTok/g,
  `<section id="tiktok" className="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">\n        <h2 className="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">\n          TikTok`
);

content = content.replace(
  /<section className="px-6 sm:px-8 lg:px-12 py-2 max-w-\[1600px\] mx-auto">\s*<h2[^>]*>\s*SMS/g,
  `<section id="sms" className="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">\n        <h2 className="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">\n          SMS`
);

content = content.replace(
  /<section className="px-6 sm:px-8 lg:px-12 py-2 max-w-\[1600px\] mx-auto">\s*<h2[^>]*>\s*Email/g,
  `<section id="email" className="px-6 sm:px-8 lg:px-12 py-2 max-w-[1600px] mx-auto">\n        <h2 className="font-poppins text-4xl sm:text-5xl lg:text-5xl font-semibold text-neutral-800 mb-6 tracking-tight">\n          Email`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated ServiceDigitalAdvertising.tsx');
