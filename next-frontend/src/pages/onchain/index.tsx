import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import OnchainPostsContainer from '../../screens/OnChain'

const DiscussionPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | OnChain</title>
        <meta name="description" content="Polkaassembly | OnChain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OnchainPostsContainer />
    </div>
  )
}

export default DiscussionPage
