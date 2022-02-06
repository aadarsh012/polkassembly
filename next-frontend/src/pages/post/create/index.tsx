import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import CreatePost from '../../../screens/CreatePost'

const CreatePostPage: NextPage = () => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Create Post</title>
        <meta name="description" content="Polkaassembly | Create Post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreatePost />
    </div>
  )
}

export default CreatePostPage
