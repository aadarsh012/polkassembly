import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import NotFound from '../screens/NotFound'

const NotFoundPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Polkaassembly | 404</title>
        <meta name="description" content="Polkaassembly | 404" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotFound />
    </div>
  )
}

export default NotFoundPage
