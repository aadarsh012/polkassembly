import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import SearchScreen from '../../screens/Search'

const SearchPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Search</title>
        <meta name="description" content="Polkaassembly | Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchScreen />
    </div>
  )
}

export default SearchPage
