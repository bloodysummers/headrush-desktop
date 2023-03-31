import Head from 'next/head'
import { useQuery } from 'react-query'

export default function Setlists() {
  return (
    <>
      <Head>
        <title>Headrushfx Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Setlists</h1>
      </main>
    </>
  )
}
