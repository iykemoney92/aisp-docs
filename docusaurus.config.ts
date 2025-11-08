import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AI Studio Plus Documentation',
  tagline: 'Unlock the power of AI - Create, innovate, and transform with cutting-edge AI tools',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.aisp.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aisp', // Usually your GitHub org/user name.
  projectName: 'aisp-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'zh', 'fr', 'de', 'ja', 'pt', 'ar'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr' },
      es: { label: 'Español', direction: 'ltr' },
      zh: { label: '中文', direction: 'ltr' },
      fr: { label: 'Français', direction: 'ltr' },
      de: { label: 'Deutsch', direction: 'ltr' },
      ja: { label: '日本語', direction: 'ltr' },
      pt: { label: 'Português', direction: 'ltr' },
      ar: { label: 'العربية', direction: 'rtl' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/aisp/aisp-docs/edit/main/docs.aisp.app/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/aisp/aisp-docs/edit/main/docs.aisp.app/',
          blogTitle: 'AI Studio Plus Updates',
          blogDescription: 'Latest news, updates, and announcements from AI Studio Plus',
          postsPerPage: 10,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/aisp-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Studio Plus Docs',
      logo: {
        alt: 'AI Studio Plus Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'gettingStartedSidebar',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'featuresSidebar',
          position: 'left',
          label: 'Features',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://studio.aisp.app',
          label: 'Launch App',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/introduction',
            },
            {
              label: 'Features',
              to: '/features/chat',
            },
            {
              label: 'Tutorials',
              to: '/tutorials',
            },
            {
              label: 'API Reference',
              to: '/api',
            },
          ],
        },
        {
          title: 'Platform',
          items: [
            {
              label: 'AI Studio Plus',
              href: 'https://studio.aisp.app',
            },
            {
              label: 'Agents Marketplace',
              href: 'https://studio.aisp.app/gpt/agents-marketplace',
            },
            {
              label: 'Pricing',
              href: 'https://studio.aisp.app/pricing',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/aisp',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/aistudioplus',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@aistudioplus',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://studio.aisp.app/privacy',
            },
            {
              label: 'Terms of Service',
              href: 'https://studio.aisp.app/terms',
            },
            {
              label: 'Contact Support',
              href: 'https://studio.aisp.app/support',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Studio Plus. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
