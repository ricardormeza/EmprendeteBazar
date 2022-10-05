import Head from "next/head"
import Header from "./Header"
import Footer from './Footer'

export default function Layout({children, title = '', description = ''}) {
  return (
    <>
    <Head>
        <title>{`Emprendete Bazar - ${title}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/emprendete-logo-1.ico" />
    </Head>
    <Header/>
        {children}
    <Footer/>
    </>
  )
}
