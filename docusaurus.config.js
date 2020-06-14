module.exports = {
    title: 'TimeCat',
    tagline: 'A Magical Web Recorder & Player',
    url: 'https://oct16.github.io', // Your website URL
    baseUrl: '/TimeCat-Docs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'oct16', // Usually your GitHub org/user name.
    projectName: 'TimeCat-Docs', // Usually your repo name.
    themes: [],
    themeConfig: {
        navbar: {
            title: 'TimeCat',
            logo: {
                alt: 'TimeCat',
                src: 'img/logo.png'
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left'
                },
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/oct16/timecat',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Introduction',
                    items: [
                        {
                            label: 'Installation',
                            to: 'docs/'
                        },
                        {
                            label: 'Quick Start',
                            to: 'docs/quick-start/'
                        }
                    ]
                },
                {
                    title: 'Advanced',
                    items: [
                        {
                            label: 'Recorder Options',
                            href: '/docs/recorder-options/'
                        },
                        {
                            label: 'Player Options',
                            href: '/docs/player-options/'
                        }
                    ]
                },
                {
                    items: [
                        {
                            label: 'Demonstrate',
                            href: '/docs/demo'
                        },
                        {
                            label: 'Tutorials Step By Step',
                            href: '/docs/step-by-step'
                        }
                    ]
                },
                {
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/oct16/timecat'
                        },
                        {
                            label: 'Have Bug?',
                            href: 'https://timecatjs.com/issue-helper'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} TimeCat. Built with Docusaurus.`
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
}
