import Link from 'next/link'
import styles from '@styles/modules/CategoryNav.module.css'
import { useRouter } from 'next/router'

const CategoryNav = () => {
  const router = useRouter()

  return (
    <>
      <nav aria-label="Select Category">
        <ul className={styles['category-nav']}>
          <li className={router && router.pathname && router.asPath.startsWith('/archive/all') ? 'active' : ''}>
            <Link href="/archive/all">
              <a>
                All
              </a>
            </Link>
          </li>
            
          <li className={router && router.pathname && router.asPath.startsWith('/archive/websites') ? 'active' : ''}>
            <Link href="/archive/websites">
              <a>
                Websites
              </a>
            </Link>
          </li>

          <li className={router && router.pathname && router.asPath.startsWith('/archive/animations') ? 'active' : ''}>
            <Link href="/archive/animations">
              <a>
                Animations
              </a>
            </Link>
          </li>

          <li className={router && router.pathname && router.asPath.startsWith('/archive/graphics') ? 'active' : ''}>
            <Link href="/archive/graphics">
              <a>
                Graphics
              </a>
            </Link>
          </li>

          <li className={router && router.pathname && router.asPath.startsWith('/archive/photography') ? 'active' : ''}>
            <Link href="/archive/photography">
              <a>
                Photography
              </a>
            </Link>
          </li>

          <li className={router && router.pathname && router.asPath.startsWith('/archive/painting') ? 'active' : ''}>
            <Link href="/archive/painting">
              <a>
                Painting
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .active {
          position: relative;
        }

        .active::before {
          color: #5A8216;
          content: '•';
          left: -0.7em;
          position: absolute;
        }
      `}</style>
    </>
  )
}

export default CategoryNav