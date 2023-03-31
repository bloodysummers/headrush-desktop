import Head from 'next/head'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { editorState } from '../../state/editor'

export default function AssetsPage() {
  const editor = useRecoilValue(editorState)

  return (
    <>
      <Head>
        <title>Headrushfx Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Sections</h1>
        <ul>
          <li>
            <h3>
              <Link href="/assets/setlist">Setlists</Link>
            </h3>
            <h3>
              <Link href="/assets/rig">Rigs</Link>
            </h3>
          </li>
        </ul>
      </main>
    </>
  )
}
