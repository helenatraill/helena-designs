import Layout from '@components/layouts/Layout'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import { client } from '@client'
import styles from '@styles/modules/Post.module.css'
import { PostNav } from '@components/includes'
import Image from 'next/image'

export default function Page() {
  const { usePost } = client
  const post = usePost()

  return (
    <>
      <Layout
        title={post?.title()}
      >        
        <article className={styles.post}>
          <div className={styles.image}>
            <div className="image-wrapper">
              <Image
                src={post?.featuredImage?.node?.sourceUrl()}
                alt={post?.featuredImage?.node?.altText}
                width={post?.featuredImage?.node?.mediaDetails?.width}
                height={post?.featuredImage?.node?.mediaDetails?.height}
                //objectFit="cover"
              />
            </div>
          </div>
          <div className={styles.content}>
            <h1>{post?.title()}</h1>
            <div dangerouslySetInnerHTML={{ __html: post?.content() ?? '' }} />
          </div>
        </article>

        <PostNav />
      </Layout>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  })
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}