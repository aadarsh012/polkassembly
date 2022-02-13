import type { NextPage } from 'next'
// import styles from '../../../styles/Home.module.css'
import PostReferendum from '../../screens/PostReferendum'

interface Props {
  id: number
}

const PostReferendumPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      <PostReferendum id={id} />
    </div>
  )
}

PostReferendumPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default PostReferendumPage
