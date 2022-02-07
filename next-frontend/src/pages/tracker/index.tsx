import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import TrackerContainer from '../../screens/Tracker'

const TrackerPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Tracker</title>
        <meta name="description" content="Polkaassembly | Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TrackerContainer />
    </div>
  )
}

export default TrackerPage
