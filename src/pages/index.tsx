import React, { useEffect } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import macbookUrl from 'raw-loader!../../static/img/macbook.txt'

const features = [
    {
        title: 'Ultra-long time lossless recording',
        imageUrl: 'img/home/record.png',
        description: <>Ultra-long browser recording, high performance, low storage, all browser interactions tracking</>
    },
    {
        title: 'A "Player" more powerful than Player',
        imageUrl: 'img/home/player.png',
        description: (
            <>
                Truly lossless video recording with player support for skipping, fast forwarding, and exporting. Just
                like a real player
            </>
        )
    },
    {
        title: 'Fully open source based on GPL',
        imageUrl: 'img/home/open-source.png',
        description: <>All core technologies are fully open source, based on General Public License</>
    }
]

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl)
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

function Home() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context

    useEffect(() => {
        const domain = window.location.hostname.split('.').slice(-2).join('.')
        document.domain = domain
    })

    return (
        <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <header className={clsx(styles.heroBanner)}>
                <div className="container">
                    <h1 className={clsx(styles.title, 'hero__title')}>{siteConfig.title}</h1>
                    <div className={styles.badges}>
                        <a href="https://www.npmjs.com/package/timecatjs">
                            <img alt="GitHub Repo version" src="https://img.shields.io/npm/v/timecatjs/latest" />
                        </a>
                        <a href="https://github.com/oct16/timecat">
                            <img
                                alt="GitHub Repo stars"
                                src="https://img.shields.io/github/stars/oct16/timecat?style=social"
                            />
                        </a>
                    </div>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx('button button--outline button--secondary button--lg', styles.getStarted)}
                            to={useBaseUrl('docs/')}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                <section className={styles.preview}>
                    <img src={macbookUrl} alt="macbook" />
                    <iframe
                        allowFullScreen
                        className={styles.demo}
                        src="https://www.timecatjs.com/examples/antd"
                        frameBorder="0"
                    ></iframe>
                </section>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    )
}

export default Home
