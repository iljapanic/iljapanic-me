import Layout from '../components/Layout'
import PostWrapper from '../components/PostWrapper'

export default function Custom404() {
  return (
    <>
      <Layout title="404">
        <PostWrapper>
          <h1 className="text-center">404 – Page No Found</h1>
        </PostWrapper>
      </Layout>
    </>
  )
}
