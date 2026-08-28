/**
 * Lux Proposals (LPs) Configuration
 */

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: 'github' | 'twitter' | 'discord' | 'telegram' | 'youtube' | 'linkedin' | 'website';
  href: string;
  label?: string;
}

export interface RFCConfig {
  name: string;
  shortName: string;
  title: string;
  description: string;
  baseUrl: string;
  repoUrl: string;
  forumUrl?: string;
  helpUrl?: string;
  docsUrl?: string;
  rfcDir: string;
  filePrefix: string;
  categories: CategoryConfig[];
  branding: { primaryColor: string; logo?: string; };
  theme: { storageKey: string; defaultTheme: 'light' | 'dark' | 'system'; };
  footer: {
    sections: FooterSection[];
    copyright: string;
    socials: SocialLink[];
  };
}

export interface CategoryConfig {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  range: [number, number];
  icon: string;
  color: string;
  learnMore?: string;
  keyTopics?: string[];
}

const config: RFCConfig = {
  name: 'Lux Proposals',
  shortName: 'LP',
  title: 'Lux Proposals (LPs) - Quantum-Safe Blockchain Standards',
  description: 'Technical standards and improvement proposals for the Lux Network blockchain ecosystem.',

  baseUrl: 'https://lps.lux.network',
  repoUrl: 'https://github.com/luxfi/lps',
  forumUrl: 'https://lux.forum',
  helpUrl: 'https://lux.help',
  docsUrl: 'https://docs.lux.network',

  rfcDir: 'LPs',
  filePrefix: 'lp-',

  categories: [
    {
      slug: 'core',
      name: 'Core Architecture',
      shortDesc: 'Network fundamentals',
      description: 'Foundational specifications for Lux Network.',
      range: [0, 99],
      icon: 'layers',
      color: 'blue',
      keyTopics: ['Network topology', 'Node specs', 'Multi-chain'],
    },
    {
      slug: 'consensus',
      name: 'Consensus',
      shortDesc: 'Consensus protocols',
      description: 'Snowman, Avalanche, and quantum consensus mechanisms.',
      range: [100, 199],
      icon: 'consensus',
      color: 'purple',
      keyTopics: ['Snowman', 'Avalanche', 'BFT', 'Finality'],
    },
    {
      slug: 'cryptography',
      name: 'Cryptography',
      shortDesc: 'Cryptographic standards',
      description: 'Post-quantum cryptography and security primitives.',
      range: [200, 299],
      icon: 'lock',
      color: 'emerald',
      keyTopics: ['ML-KEM', 'ML-DSA', 'SLH-DSA', 'ZK proofs'],
    },
  ],

  branding: { primaryColor: 'blue' },
  theme: { storageKey: 'lux-lps-theme', defaultTheme: 'system' },

  footer: {
    sections: [
      {
        title: 'Categories',
        links: [
          { label: 'Core Architecture', href: '/docs/?type=core' },
          { label: 'Consensus', href: '/docs/?type=consensus' },
          { label: 'Cryptography', href: '/docs/?type=cryptography' },
          { label: 'Token Standards', href: '/docs/?type=tokens' },
          { label: 'DeFi', href: '/docs/?type=defi' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'All Proposals', href: '/docs/' },
          { label: 'Developer Docs', href: 'https://docs.lux.network', external: true },
          { label: 'Help Center', href: 'https://lux.help', external: true },
          { label: 'Discussion Forum', href: 'https://lux.forum', external: true },
        ],
      },
      {
        title: 'Ecosystem',
        links: [
          { label: 'Lux Network', href: 'https://lux.network', external: true },
          { label: 'Lux Bridge', href: 'https://bridge.lux.network', external: true },
          { label: 'Block Explorer', href: 'https://explorer.lux.network', external: true },
          { label: 'Lux Wallet', href: 'https://wallet.lux.network', external: true },
          { label: 'Lux Safe', href: 'https://safe.lux.network', external: true },
        ],
      },
      {
        title: 'Organization',
        links: [
          { label: 'Lux Industries Inc', href: 'https://lux.partners', external: true },
          { label: 'Hanzo AI', href: 'https://hanzo.ai', external: true },
          { label: 'Zoo Labs', href: 'https://zoo.ngo', external: true },
          { label: 'GitHub', href: 'https://github.com/luxfi', external: true },
        ],
      },
    ],
    copyright: 'Lux Network',
    socials: [
      { platform: 'github', href: 'https://github.com/luxfi' },
      { platform: 'twitter', href: 'https://x.com/luxaboratories', label: 'X' },
      { platform: 'discord', href: 'https://discord.gg/lux' },
      { platform: 'telegram', href: 'https://t.me/luxnetwork' },
    ],
  },
};

export default config;
export { config };
