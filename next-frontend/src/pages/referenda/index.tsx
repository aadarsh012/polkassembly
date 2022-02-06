import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import OnchainPostsContainer from '../../screens/Referenda'

const ReferandaPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Referanda</title>
        <meta name="description" content="Polkaassembly | Referanda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OnchainPostsContainer />
    </div>
  )
}

export default ReferandaPage
