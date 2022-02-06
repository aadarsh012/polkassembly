import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import OnchainTipContainer from '../../screens/Tips'

const TipsPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Tips</title>
        <meta name="description" content="Polkaassembly | Tips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OnchainTipContainer />
    </div>
  )
}

export default TipsPage
