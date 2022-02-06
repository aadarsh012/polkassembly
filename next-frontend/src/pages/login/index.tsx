import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import LoginForm from '../../screens/LoginForm'

const LoginPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Login</title>
        <meta name="description" content="Polkaassembly | Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </div>
  )
}

export default LoginPage
