import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import OnchainPostsContainer from '../../screens/Motions'

const MotionsPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Motions</title>
        <meta name="description" content="Polkaassembly | Motions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OnchainPostsContainer />
    </div>
  )
}

export default MotionsPage
