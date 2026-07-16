export interface PageSEO {
  title: string;
  pageDescription?: string;
  metaDescription: string;
}

export const seoConfig: Record<string, PageSEO> = {
  home: {
    title: "R-E-D | Reach Engage Develop | Digital Advertising",
    metaDescription: "R-E-D is a unique digital solutions provider specializing in digital advertising, website development, and social media management.",
    pageDescription: "Tailored digital solutions driving growth.",
  },
  about: {
    title: "About Us | R-E-D",
    metaDescription: "Learn about R-E-D's story, our team, core values, and our philosophy for delivering top-tier digital marketing solutions.",
  },
  contact: {
    title: "Contact Us | R-E-D",
    metaDescription: "Contact the R-E-D team today to schedule a meeting and establish your digital presence.",
  },
  careers: {
    title: "Careers | R-E-D",
    metaDescription: "Join the R-E-D team. Explore our open positions and career opportunities in digital marketing and development.",
  },
  'career-detail': {
    title: "Head of Social Media | R-E-D Careers",
    metaDescription: "Apply for the Head of Social Media position at R-E-D. Lead our social media management and digital strategies.",
  },
  'career-detail-search': {
    title: "Head of Search | R-E-D Careers",
    metaDescription: "Apply for the Head of Search position at R-E-D. Lead our paid media and digital marketing search strategies.",
  },
  'career-detail-intern': {
    title: "Digital Marketing Intern | R-E-D Careers",
    metaDescription: "Start your career with R-E-D as a Digital Marketing Intern and learn from industry experts.",
  },
  'career-detail-designer': {
    title: "Digital Designer | R-E-D Careers",
    metaDescription: "Apply for the Digital Designer position at R-E-D. Create stunning digital assets and web designs.",
  },
  services: {
    title: "Services | R-E-D",
    metaDescription: "Explore R-E-D's digital solutions, including digital advertising, website development, online reputation, and more.",
  },
  'service-digital-advertising': {
    title: "Digital Advertising | R-E-D",
    metaDescription: "Data-driven digital advertising campaigns that focus on generating qualified leads and maximizing ROI.",
  },
  'service-social-media': {
    title: "Social Media Management | R-E-D",
    metaDescription: "Professional social media management tailored to engage your audience and build your brand presence.",
  },
  'service-website-dev': {
    title: "Website Development | R-E-D",
    metaDescription: "Custom website development and maintenance ensuring a responsive, high-performing digital storefront.",
  },
  'service-online-reputation': {
    title: "Online Reputation Management | R-E-D",
    metaDescription: "Protect and enhance your brand's digital image with our proactive online reputation management solutions.",
  },
  'service-location-listing': {
    title: "Location Listing | R-E-D",
    metaDescription: "Optimize your local search visibility and drive foot traffic with our location listing management.",
  },
  postx: {
    title: "PostX | R-E-D",
    metaDescription: "Discover PostX, our integrated internal communication tool designed to streamline workflows and team collaboration.",
  },
  blogs: {
    title: "Blogs | R-E-D",
    metaDescription: "Read the latest insights, strategies, and news from the R-E-D team on digital marketing and business growth.",
  },
  article: {
    title: "Article | R-E-D",
    metaDescription: "Dive deeper into digital marketing strategies, insights, and industry trends.",
  }
};
