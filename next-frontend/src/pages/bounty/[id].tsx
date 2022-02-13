import type { NextPage } from 'next'
import PostBounty from '../../screens/BountyPost'

interface Props {
  id: number
}

const PostBountyPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      <PostBounty id={id} />
    </div>
  )
}

PostBountyPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default PostBountyPage
