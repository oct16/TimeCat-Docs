import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

function Home() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout title={`${siteConfig.title}`}>
            <div className={styles.container}>
                <section className={styles.centerSection}>
                    <div className={styles.title}>
                        <i></i>TimeCat Chrome
                    </div>
                    <div className={styles.materialPlayer}>
                        <img width={588} height={430} src={useBaseUrl('img/chrome/player.png')} alt="" />
                    </div>
                    <div className={styles.desc}>
                        <div className={styles.chromeStoreInfo}>
                            <img
                                alt="Chrome Web Store"
                                src="https://img.shields.io/chrome-web-store/v/jgnkkambbdmhfdbdbkljlenddlbplhal?label=TimeCat-Chrome"
                            />

                            <img
                                alt="Chrome Web Store"
                                src="https://img.shields.io/chrome-web-store/stars/jgnkkambbdmhfdbdbkljlenddlbplhal"
                            ></img>
                            <img
                                alt="Chrome Web Store"
                                src="https://img.shields.io/chrome-web-store/users/jgnkkambbdmhfdbdbkljlenddlbplhal?color=blue"
                            ></img>
                        </div>
                        TimeCat Chrome is a TimeCat-based plug-in for Chrome that allows video recording and replay in
                        the browser, and supports one-click download and export.
                        {/* TimeCat Chrome 是基于 TimeCat 实现的 Chrome
                        浏览器插件，可以在浏览器中进行视频录制与播放功能，并且支持一键下载导出 */}
                        <br />
                        <a
                            target="_blank"
                            href="https://chrome.google.com/webstore/detail/timecat-chrome/jgnkkambbdmhfdbdbkljlenddlbplhal"
                        >
                            Add to Chrome
                        </a>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Home
