import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import Discussions from '../../screens/Discussions'

const DiscussionPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Discussions</title>
        <meta name="description" content="Polkaassembly | Discussions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Discussions />
    </div>
  )
}

export default DiscussionPage
