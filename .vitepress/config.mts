import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "UMTC System",
  description: "Universal Materials Texture Changer System Documentation",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Builder Guide', link: '/guide/introduction' },
      { text: 'Technical Reference', link: '/technical/overview' },
      { text: 'API', link: '/api/reference' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Builder Guide',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Configuration', link: '/guide/configuration' },
            { text: 'Troubleshooting', link: '/guide/troubleshooting' }
          ]
        }
      ],
      '/technical/': [
        {
          text: 'Technical Reference',
          items: [
            { text: 'Overview', link: '/technical/overview' },
            { text: 'Data Dump Formats', link: '/technical/data-formats' },
            { text: 'LinksetData Structure', link: '/technical/lsd-structure' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Link Messages', link: '/api/reference' },
            { text: 'HUD Communication', link: '/api/hud' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/feudalism-dev/umtc' }
    ]
  }
})
