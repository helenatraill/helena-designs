import Link from 'next/link'
import styles from '@styles/modules/PostNav.module.css'
import { useRouter } from 'next/router'
import { client } from '@client'

const PostNav = () => {
  const router = useRouter()
  const { usePosts, usePost } = client
  const post = usePost
  const posts = usePosts({
    first: 150,
  })?.nodes

  const { query = {} } = useRouter()
  const { categorySlug } = query

  return (
    <>
      <nav className={styles['post-nav']} aria-label="Select Project">
        <ul className={styles['post-nav__content']}>
          {posts.map((post) => (
            <li className={router && router.pathname && router.asPath === (`/projects/${post.slug}`) ? 'active' : ''}>
              <Link href={`/projects/${post.slug}`}>
                <a>
                  {post?.title()}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        .active {
          position: relative;
        }

        .active::before {
          color: #fff;
          content: '•';
          left: -0.7em;
          position: absolute;
        }
      `}</style>
    </>
  )
}

export default PostNav