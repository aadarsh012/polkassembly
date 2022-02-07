import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import { TermsOfWebsite } from '../../screens/LegalDocuments'

const TermsofWebsitePage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Terms of Website</title>
        <meta name="description" content="Polkaassembly | Terms of Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TermsOfWebsite />
    </div>
  )
}

export default TermsofWebsitePage
