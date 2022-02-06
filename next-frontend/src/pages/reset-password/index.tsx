import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import ResetPassword from '../../screens/ResetPassword'

const ResetPasswordPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Reset Password</title>
        <meta name="description" content="Polkaassembly | Reset Password" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResetPassword />
    </div>
  )
}

export default ResetPasswordPage
