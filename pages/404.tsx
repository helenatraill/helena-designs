import Layout from '@components/layouts/Layout'
import styles from '@styles/modules/404.module.css'
import Link from 'next/dist/client/link'

export default function NotFound() {
  return (
    <Layout title="Uh oh, page not found">
      <div className={styles['four-oh-four']}>
        <h1 className="sr-only">Page not found</h1>
        <article className={styles.hi}>
          <p>Oops, that page doesn't exist anymore.</p>
          <Link href="/archive/all" className="btn btn-green">
            View my work
          </Link>
        </article>
      </div>
    </Layout>
  )
}
