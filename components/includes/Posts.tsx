import Link from 'next/link'
import styles from '@styles/modules/Archive.module.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { CategoryNav } from '@components/includes'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { client } from 'client'

export default function Posts() {

  const { usePosts } = client
  const posts = usePosts({
    first: 150,
  })?.nodes

  const { query = {} } = useRouter()
  const { categorySlug } = query

  return (
    <div className={styles.archive}>
      <CategoryNav />

      <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 768: 2, 1024: 3}}
      >
        <Masonry
          gutter={16}
        >
            {posts.map((post) => (
              <article
                key={post.id ?? ''}
              >
                <Link href={`/archive/${categorySlug}/${post.slug}`}>
                  <a>
                    <Image
                      src={post?.featuredImage?.node?.sourceUrl()}
                      alt={post?.featuredImage?.node?.altText}
                      width={post?.featuredImage?.node?.mediaDetails?.width}
                      height={post?.featuredImage?.node?.mediaDetails?.height}
                      objectFit="cover"
                    />
                  </a>
                </Link>
              </article>
            ))}
            {posts && posts?.length < 1 && <p>No {categorySlug} projects found :(</p>}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}