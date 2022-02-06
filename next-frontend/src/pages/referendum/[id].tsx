import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import PostReferendum from '../../screens/PostReferendum'

interface Props {
  id: number
}

const PostReferendumPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Referendum</title>
        <meta name="description" content="Polkaassembly | Referendum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostReferendum id={id} />
    </div>
  )
}

PostReferendumPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default PostReferendumPage
