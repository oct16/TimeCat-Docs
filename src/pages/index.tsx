import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
    {
        title: 'Support ultra-long time lossless video recording',
        imageUrl: 'img/home/record.png',
        description: (
            <>
                Support ultra-long browser video recording, high performance, low storage, record all browser
                interactions
            </>
        )
    },
    {
        title: 'A "Player" more powerful than Player',
        imageUrl: 'img/home/player.png',
        description: (
            <>
                Truly lossless video recording with player support for skipping, fast forwarding, and exporting. Just
                like the real player
            </>
        )
    },
    {
        title: 'Fully open source under the GPL3.0 License',
        imageUrl: 'img/home/open-source.png',
        description: <>All core technologies are fully open source, but need to follow the GPL License</>
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
    return (
        <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <header className={clsx(styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
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
                    <img src={useBaseUrl('img/macbook.jpg')} alt="macbook" />
                    <iframe
                        allowFullScreen
                        className={styles.demo}
                        src="https://www.timecatjs.com/timeCatReplay/antd.html"
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
