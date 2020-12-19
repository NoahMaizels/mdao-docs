module.exports = {
  title: 'MANTRA DAO Docs',
  tagline: 'Official documentation for MANTRA DAO, the community-governed DeFi platform focusing on Staking, Lending, and Governance.',
  url: 'https://mantra-dao-docs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MANTRA DAO', // Usually your GitHub org/user name.
  projectName: 'MANTRA DAO Docs', // Usually your repo name.
  stylesheets: ['https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'],
  plugins: [require.resolve('docusaurus-lunr-search')],
  themeConfig: {
    navbar: {
      title: 'MANTRA DAO Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/about',
          label: 'About',
          position: 'left',
        },
        {
          to: 'docs/guides',
          label: 'User Guides',
          position: 'left',
        },
        {
          to: 'docs/developers-intro',
          label: 'Developer',
          position: 'left',
        },
        {to: 'blog', label: 'News', position: 'left'},
        {
          label: 'Lang',
          position: 'left',
          items: [
            {
              label: 'EN',
              href: '/',
              target: ''
            },
            {
              label: 'CN',
              href: 'docs/cn-placeholder',
            },
            // ... more items
          ],
        },
        {
          href: 'https://github.com/mantradao',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/MANTRADAO',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MANTRADAO',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/mantradao/',
            },
            {
              label: 'Medium',
              href: 'https://mantradao.medium.com/',
            },    
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'MANTRA DAO Homepage',
              href: 'https://mantradao.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mantradao',
            },
            {
              label: 'White Paper',
              href: 'https://mantradao.com/files/MANTRA_DAO_Whitepaper.pdf',
            },
            {
              label: 'Brand Assets',
              href: 'https://mantradao.com/brand-assets',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MANTRA DAO Built with Docusaurus.`,
    },
  
    // ...
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    // ...
  
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/mantradao',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://mantradao.com/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
