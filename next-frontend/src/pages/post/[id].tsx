import type { NextPage } from 'next'
// import styles from '../../../styles/Home.module.css'
import PostDiscussion from '../../screens/DiscussionPost'

interface Props {
  id: number
}

const PostDiscussionPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      <PostDiscussion id={id} />
    </div>
  )
}

PostDiscussionPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default PostDiscussionPage
