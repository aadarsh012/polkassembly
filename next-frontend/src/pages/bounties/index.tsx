import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import OnchainBountyContainer from '../../screens/Bounties'

const BountiesPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Bounties</title>
        <meta name="description" content="Polkaassembly | Bounties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OnchainBountyContainer />
    </div>
  )
}

export default BountiesPage
