import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import PostTip from '../../screens/TipPost'

interface Props {
  hash: string
}

const PostTipPage: NextPage<Props> = ({hash}) => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Tip</title>
        <meta name="description" content="Polkaassembly | Tip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostTip hash={hash} />
    </div>
  )
}

PostTipPage.getInitialProps = async ({query: { hash }}) : Promise<Props> => {
	const hashString = hash as string;
  return {hash: hashString};
}

export default PostTipPage
