import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import TreasuryProposalContainer from '../../screens/Treasury'

const TreasuryProposalsPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Treasury Proposals</title>
        <meta name="description" content="Polkaassembly | Treasury Proposals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TreasuryProposalContainer />
    </div>
  )
}

export default TreasuryProposalsPage
