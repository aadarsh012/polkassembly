import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import UndoEmailChange from '../../screens/UndoEmailChange'

interface Props {
  token: string
}

const UndoEmailChangePage: NextPage<Props> = ({token}) => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Undo Email Change</title>
        <meta name="description" content="Polkaassembly | Undo Email Change" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UndoEmailChange token={token} />
    </div>
  )
}

UndoEmailChangePage.getInitialProps = async ({query: { token }}) : Promise<Props> => {
	const tokenString = token as string;
  return {token: tokenString};
}

export default UndoEmailChangePage
