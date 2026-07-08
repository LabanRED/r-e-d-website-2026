export interface NavLink {
  label: string;
  href: string;
}

export interface ClientLogo {
  name: string;
  industry: string;
  logoText: string;
}

export interface FeatureCardData {
  id: string;
  iconName: string; // Lucide icon name string
  headline: string;
  bullets: string[];
}

export interface ServiceCardData {
  id: string;
  iconName: string;
  headline: string;
  supportText: string;
}
