import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import Settings from '../../screens/Settings'

const SettingsPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Settings</title>
        <meta name="description" content="Polkaassembly | Settings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Settings />
    </div>
  )
}

export default SettingsPage
