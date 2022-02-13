import type { NextPage } from 'next'
// import styles from '../../../styles/Home.module.css'
import PostTreasury from '../../screens/TreasuryPost'

interface Props {
  id: number
}

const PostTreasuryPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      <PostTreasury id={id} />
    </div>
  )
}

PostTreasuryPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default PostTreasuryPage
