import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import OnchainPostsContainer from '../../screens/Council'

const CouncilPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Council</title>
        <meta name="description" content="Polkaassembly | Council" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OnchainPostsContainer />
    </div>
  )
}

export default CouncilPage
