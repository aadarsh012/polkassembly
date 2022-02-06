import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import Signup from '../../screens/SignupForm'

const SignUpPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Sign Up</title>
        <meta name="description" content="Polkaassembly | Sign Up" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
    </div>
  )
}

export default SignUpPage
