module.exports = {
    title: 'TimeCat',
    tagline: 'A Magical Web Recorder & Player',
    url: 'https://oct16.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'oct16',
    projectName: 'TimeCat-Docs',
    titleDelimiter: '🐱',
    themes: [],
    themeConfig: {
        sidebarCollapsible: false,
        colorMode: {
            disableSwitch: true
        },
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
                { label: 'Blog', to: 'blog', position: 'left' },
                { label: 'Demo', position: 'left', href: 'https://timecatjs.com' },
                {
                    label: 'Github',
                    href: 'https://github.com/oct16/timecat',
                    className: 'header-github-link',
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
                    showLastUpdateAuthor: true,
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/oct16/TimeCat-Docs/edit/master'
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/oct16/TimeCat-Docs/edit/master'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                },
                sitemap: {
                    cacheTime: 600 * 1000, // 600 sec - cache purge period
                    changefreq: 'weekly',
                    priority: 0.5,
                    trailingSlash: false
                },
                googleAnalytics: {
                    trackingID: 'UA-151180797-1',
                    anonymizeIP: false
                }
            }
        ]
    ]
}
