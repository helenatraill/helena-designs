import PostLayout from '@components/layouts/PostLayout'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import { client } from '@client'
import styles from '@styles/modules/Post.module.css'
import Image from 'next/image'

export default function Post() {
  const { usePost } = client
  const post = usePost()

  return (
    <>
      <PostLayout title={post?.title()}>
        <article className={styles.post}>
          <div className={styles.image}>
            <div className="image-wrapper">
              <Image
                src={post?.featuredImage?.node?.sourceUrl()}
                alt={post?.featuredImage?.node?.altText}
                width={post?.featuredImage?.node?.mediaDetails?.width}
                height={post?.featuredImage?.node?.mediaDetails?.height}
                //placeholder="blur"
                //blurDataURL={post?.featuredImage?.node?.sourceUrl()}
                //objectFit="cover"
              />
            </div>
          </div>
          <div className={styles.content}>
            <h1>{post?.title()}</h1>
            <div dangerouslySetInnerHTML={{ __html: post?.content() ?? '' }} />
          </div>
        </article>
      </PostLayout>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Post,
    client,
    notFound: await is404(context, { client }),
  })
}

export async function getStaticPaths() {
  const values = await client.client.inlineResolved(() => {
    return client.client.query
      .posts({
        first: 150,
      })
      ?.nodes?.map(node => node?.uri)
  })

  const paths = []

  if (Array.isArray(values)) {
    paths.push(
      ...values.filter(value => {
        return typeof value === 'string'
      })
    )
  }

  return {
    paths,
    fallback: 'blocking',
  }
}
