import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import UserProfile from '../../screens/UserProfile'

interface Props {
  username: string
}

const UserPage: NextPage<Props> = ({username}) => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | User</title>
        <meta name="description" content="Polkaassembly | User" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProfile username={username} />
    </div>
  )
}

UserPage.getInitialProps = async ({query: { username }}) : Promise<Props> => {
	const usernameString = username as string;
  return {username: usernameString};
}

export default UserPage
