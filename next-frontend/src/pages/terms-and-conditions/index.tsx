import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import { TermsAndConditions } from '../../screens/LegalDocuments'

const TermsandConditionsPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Terms and Conditions</title>
        <meta name="description" content="Polkaassembly | Terms and Conditions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TermsAndConditions />
    </div>
  )
}

export default TermsandConditionsPage
