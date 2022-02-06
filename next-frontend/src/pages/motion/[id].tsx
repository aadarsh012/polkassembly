import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../../../styles/Home.module.css'
import MotionPost from '../../screens/MotionPost'

interface Props {
  id: number
}

const MotionPostPage: NextPage<Props> = ({id}) => {
  return (
    //className={styles.container}
    <div>
      <Head>
        <title>Polkaassembly | Motion</title>
        <meta name="description" content="Polkaassembly | Motion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MotionPost id={id} />
    </div>
  )
}

MotionPostPage.getInitialProps = async ({query: { id }}) : Promise<Props> => {
	const idNumber = Number(id) || 0;
  return {id: idNumber};
}

export default MotionPostPage
