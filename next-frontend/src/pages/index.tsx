import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Home from '../screens/Home'

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Polkaassembly | Home</title>
        <meta name="description" content="Polkaassembly | Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  )
}

export default HomePage
