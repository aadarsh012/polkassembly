import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import OnchainPostsContainer from '../../screens/Proposals'

const ProposalsPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Proposals</title>
        <meta name="description" content="Polkaassembly | Proposals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OnchainPostsContainer />
    </div>
  )
}

export default ProposalsPage
