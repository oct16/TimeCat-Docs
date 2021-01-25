import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

function debounce(fn: Function, ms: number) {
    let timer = 0
    return (...args: any[]) => {
        clearTimeout(timer)
        timer = window.setTimeout(() => {
            timer = null
            fn.apply(this, args)
        }, ms)
    }
}

function Home() {
    const [height, setIFrameHeight] = useState('1000px')
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    const iframeRef = useRef(null)

    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setIFrameHeight(getIframeDimensions())
        }, 500)

        window.addEventListener('resize', debouncedHandleResize)
        const domain = window.location.hostname.split('.').slice(-2).join('.')
        document.domain = domain

        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    }, [])

    function iframeOnLoad() {
        setIFrameHeight(getIframeDimensions())
    }

    function getIframeDimensions() {
        const iframe = iframeRef.current
        const el = iframe.contentDocument.documentElement
        return el.offsetHeight + 'px'
    }

    return (
        <Layout title={`${siteConfig.title}`}>
            <div className={styles.container}>
                <iframe
                    ref={iframeRef}
                    onLoad={iframeOnLoad.bind(this)}
                    src="https://timecatjs.com/examples/"
                    frameBorder="0"
                    scrolling="no"
                    width="100%"
                    height={height}
                ></iframe>
            </div>
        </Layout>
    )
}

export default Home
