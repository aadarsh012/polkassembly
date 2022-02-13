import type { NextPage } from 'next'
// import styles from '../../../styles/Home.module.css'
import ProposalPost from '../../screens/ProposalPost'

interface Props {
  id: number
}

const ProposalPostPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      <ProposalPost id={id} />
    </div>
  )
}

ProposalPostPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default ProposalPostPage
