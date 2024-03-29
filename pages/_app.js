import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>App</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            <a>/</a>
          </Link>
          <Link href="/new">
            <a>Ajouter un point ou une pathologie</a>
          </Link>
        </div>
      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
