import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import ProposalPost from '../../screens/ProposalPost'

interface Props {
  id: number
}

const ProposalPostPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Proposal</title>
        <meta name="description" content="Polkaassembly | Proposal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProposalPost id={id} />
    </div>
  )
}

ProposalPostPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default ProposalPostPage
