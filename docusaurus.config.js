import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'RusherHack Documentation',
  tagline: 'Documentation for all things related to RusherHack.',
  favicon: 'img/logo.png',
  url: 'https://felekdevyt.github.io',
  baseUrl: '/rusherhack-docs/',
  organizationName: 'FelekDevYT',
  projectName: 'rusherhack-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    format: 'detect',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'RusherHack Documentation',
        logo: {
          alt: 'RusherHack Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/docs/intro', label: 'Guide', position: 'right'},
          {to: '/docs/modules/features', label: 'Features', position: 'right'},
          {to: '/docs/api', label: 'API', position: 'right'},
          {
            href: 'https://github.com/RusherDevelopment',
            position: 'right',
            className: 'header-github-link',
          },
          {
            href: 'https://www.youtube.com/@RusherDevelopment',
            position: 'right',
            className: 'header-youtube-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `RusherHack and Rusher Development LLC are not affiliated with Mojang AB.<br>© ${new Date().getFullYear()} Rusher Development LLC - All Rights Reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;