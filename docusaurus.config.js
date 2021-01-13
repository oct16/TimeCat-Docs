module.exports = {
    title: 'TimeCat',
    tagline: 'A Magical Web Recorder & Player',
    url: 'https://oct16.github.io', // Your website URL
    baseUrl: '/timecat/docs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'oct16', // Usually your GitHub org/user name.
    projectName: 'TimeCat-Docs', // Usually your repo name.
    themes: [],
    themeConfig: {
        navbar: {
            title: 'TimeCat',
            // logo: {
            //     alt: 'My Site Logo',
            //     src: 'img/logo.svg'
            // },
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
                    title: 'Docs',
                    items: [
                        {
                            label: 'Style Guide',
                            to: 'docs/'
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2/'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus'
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus'
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus'
                        }
                    ]
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog'
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus'
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
