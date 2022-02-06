import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import PostTreasury from '../../screens/TreasuryPost'

interface Props {
  id: number
}

const PostTreasuryPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Treasury</title>
        <meta name="description" content="Polkaassembly | Treasury" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostTreasuryPage id={id} />
    </div>
  )
}

PostTreasuryPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default PostTreasuryPage
