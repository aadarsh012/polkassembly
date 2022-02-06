import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import PostDiscussion from '../../screens/DiscussionPost'

interface Props {
  id: number
}

const PostDiscussionPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Discussion</title>
        <meta name="description" content="Polkaassembly | Discussion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostDiscussion id={id} />
    </div>
  )
}

PostDiscussionPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default PostDiscussionPage
