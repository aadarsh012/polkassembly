import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import PostBounty from '../../screens/BountyPost'

interface Props {
  id: number
}

const PostBountyPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      {/* <Head>
        <title>Polkaassembly | Bounty</title>
        <meta name="description" content="Polkaassembly | Bounty" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <PostBounty id={id} />
    </div>
  )
}

PostBountyPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default PostBountyPage
