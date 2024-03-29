import Head from 'next/head'
import { client } from '@client'
import { Header, Footer } from '@components/includes'

export default function Layout({ title, children }: { title: string; children: React.ReactNode }) {
  const { useQuery } = client
  const generalSettings = useQuery().generalSettings

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content={generalSettings.title} />
        <meta name="description" content={generalSettings.description} />

        <meta name="theme-color" content="#ffffff" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" sizes="any" type="image/png" href="/favicon.png" />

        <title>
          {title} - {generalSettings.title}
        </title>
      </Head>

      <Header />

      <main className="main-content">
        <div className="container">{children}</div>
      </main>

      <Footer />
    </>
  )
}
