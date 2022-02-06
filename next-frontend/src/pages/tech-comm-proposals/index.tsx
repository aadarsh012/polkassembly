import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import OnchainTechCommitteeProposalsContainer from '../../screens/TechCommitteeProposals'

const TechCommProposalsPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Tech Committee Proposals</title>
        <meta name="description" content="Polkaassembly | Tech Committee Proposals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OnchainTechCommitteeProposalsContainer />
    </div>
  )
}

export default TechCommProposalsPage
