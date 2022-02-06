import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import RequestResetPassword from '../../screens/RequestResetPassword'

const RequestResetPasswordPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Request Reset Password</title>
        <meta name="description" content="Polkaassembly | Request Reset Password" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RequestResetPassword />
    </div>
  )
}

export default RequestResetPasswordPage
