import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import VerifyEmail from '../../screens/VerifyEmail'

interface Props {
  token: string
}

const VerifyEmailPage: NextPage<Props> = ({token}) => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Verify Email</title>
        <meta name="description" content="Polkaassembly | Verify Email" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VerifyEmail token={token} />
    </div>
  )
}

VerifyEmailPage.getInitialProps = async ({query: { token }}) : Promise<Props> => {
	const tokenString = token as string;
  return {token: tokenString};
}

export default VerifyEmailPage
