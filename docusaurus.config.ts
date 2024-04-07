import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'PDL (Parental Digital Literacy)',
  tagline: '親が身につけるとよいデジタルリテラシー',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://geeknees.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/parental-digital-literacy/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'parental-digital-literacy', // Usually your GitHub org/user name.
  projectName: 'geeknees.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/geeknees/parental-digital-literacy'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'PDL',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'カテゴリー'
        },
        { to: '/blog', label: 'ブログ', position: 'left' },
        {
          href: 'https://github.com/geeknees/parental-digital-literacy',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '未就学児',
          items: [
            {
              label: '赤ちゃん',
              to: '/docs/category/赤ちゃん'
            },
            {
              label: '幼児',
              to: '/docs/category/幼児'
            }
          ]
        },
        {
          title: '就学児',
          items: [
            {
              label: '小学生',
              to: 'docs/category/小学生'
            },
            {
              label: '中学生',
              to: 'docs/category/中学生'
            },
            {
              label: '高校生',
              to: 'docs/category/高校生'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'ブログ',
              to: '/blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/geeknees/parental-digital-literacy'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PDL, Inc. Built with Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
}

export default config
