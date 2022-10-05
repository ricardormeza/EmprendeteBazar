import Head from "next/head"

export default function Layout({children, title, description}) {
  return (
    <>
    <Head>
        <title>{`Emprendete Bazar - ${title}`}</title>
        
    </Head>
    <h2>Desde lay out</h2>
        {children}
    </>
  )
}
