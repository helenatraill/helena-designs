import Link from 'next/link'
import styles from '@styles/modules/PostNav.module.css'
import { useRouter } from 'next/router'
import { client } from '@client'
import { useRef, useState, useEffect } from 'react'

export default function PostNav() {
  const router = useRouter()
  const { usePosts } = client
  const posts = usePosts({
    first: 150,
  })?.nodes
  const containerRef = useRef(null)
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0)

  useEffect(() => {
    setCurrentLinkIndex(posts.findIndex(post => `/projects/${post.slug}` === router.asPath))
  }, [router.asPath, posts])

  useEffect(() => {
    const currentLink = containerRef.current.children[currentLinkIndex]

    if (currentLink) {
      const containerWidth = containerRef.current.offsetWidth
      const currentLinkWidth = currentLink.offsetWidth
      const scrollTo = currentLink.offsetLeft - containerWidth / 2 + currentLinkWidth / 2

      containerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      })
    }
  }, [currentLinkIndex])

  return (
    <>
      <nav className={styles['post-nav']} aria-label="Select Project">
        <ul ref={containerRef} className={styles['post-nav__content']}>
          {posts.map(post => (
            <li key={post.slug}>
              <Link
                href={`/projects/${post.slug}`}
                aria-current={router && router.pathname && router.asPath === `/projects/${post.slug}` ? 'page' : null}>
                {post?.title()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
