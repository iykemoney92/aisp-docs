import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Getting Started sidebar - COMPLETED
  gettingStartedSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/quick-start',
        'getting-started/account-setup',
        'getting-started/pricing-credits',
        'getting-started/interface-overview',
      ],
    },
  ],

  // Features sidebar - IN PROGRESS (only showing completed articles)
  featuresSidebar: [
    {
      type: 'category',
      label: 'Chat with AI',
      items: [
        'features/chat/overview',
        // More articles coming soon...
      ],
    },
    {
      type: 'category',
      label: 'AI Agents',
      items: [
        'features/agents/configuration-guide',
        'features/agents/example-configurations',
        'features/agents/json-schema-reference',
      ],
    },
  ],

  // Tutorials sidebar - COMING SOON
  tutorialsSidebar: [
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'intro', // Using default intro for now
      ],
    },
  ],
};

export default sidebars;
