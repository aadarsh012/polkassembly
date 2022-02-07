import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import Settings from '../../screens/Settings'

const NotificationPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Notification Settings</title>
        <meta name="description" content="Polkaassembly | Notification Settings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Settings />
    </div>
  )
}

export default NotificationPage
