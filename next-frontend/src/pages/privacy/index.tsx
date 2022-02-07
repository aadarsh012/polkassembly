import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import { PrivacyPolicy } from '../../screens/LegalDocuments'

const PrivacyPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Privacy</title>
        <meta name="description" content="Polkaassembly | Privacy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrivacyPolicy />
    </div>
  )
}

export default PrivacyPage
