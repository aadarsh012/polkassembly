import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import Profile from '../../screens/Profile'

interface Props {
  address: string
}

const ProfilePage: NextPage<Props> = ({address}) => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Profile</title>
        <meta name="description" content="Polkaassembly | Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile address={address} />
    </div>
  )
}

ProfilePage.getInitialProps = async ({query: { address }}) : Promise<Props> => {
	const addressString = address as string;
  return {address: addressString};
}

export default ProfilePage
