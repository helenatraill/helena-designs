import { getNextStaticProps, is404 } from '@faustjs/next'
import { Posts, Pagination } from '@components/includes'
import { GetStaticPropsContext } from 'next'
import { client } from '@client'
import Layout from '@components/layouts/Layout'

export default function CategoryPage() {
  const { useCategory } = client
  const category = useCategory()

  return (
    <Layout
      title={category?.name}
    >
      <h1 className="sr-only">
        {category?.name}
      </h1>
      
      <Posts />
    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: CategoryPage,
    client,
    notFound: await is404(context, { client }),
  })
}
