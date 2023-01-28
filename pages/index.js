import Head from 'next/head'
import Homes from '@/components/Homes'

export default function Home() {
  return (
    <>
      <Head>
        <title>SyntaxStyle</title>
        <meta name="description" content="Nepal Online Fashion " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Homes/>
      </main>
    </>
  )
}
