import Link from 'next/link'
import styles from '@styles/modules/CategoryNav.module.css'
import { useRouter } from 'next/router'

const routes = [
  {
    name: 'All',
    path: '/archive/all',
  },
  {
    name: 'Websites',
    path: '/archive/websites',
  },
  {
    name: 'Animations',
    path: '/archive/animations',
  },
  {
    name: 'Graphics',
    path: '/archive/graphics',
  },
  {
    name: 'Photography',
    path: '/archive/photography',
  },
  {
    name: 'Painting',
    path: '/archive/painting',
  },
]

export default function CategoryNav() {
  const router = useRouter()

  return (
    <>
      <nav aria-label="Select Category">
        <ul className={styles['category-nav']}>
          {routes.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                aria-current={router && router.pathname && router.asPath.startsWith(path) ? 'page' : null}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
