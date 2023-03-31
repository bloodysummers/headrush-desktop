import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { EditorData, editorState } from '../../../state/editor'

export default function Rig() {
  const router = useRouter()
  const editorData = useRecoilValue<EditorData>(editorState)

  const { isLoading, error, data } = useQuery('rigsList', () =>
    fetch(`/api/rig?path=${editorData.path}`).then(
      res => res.json() as Promise<string[]>
    )
  )

  const editRig = (rig: string) => {
    router.push(`/assets/rig/editor/${rig}`)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>Headrushfx Rig Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>List of rigs</h1>
        <ul>
          {data &&
            data.map(rig => (
              <li key={rig} onClick={() => editRig(rig)}>
                {rig}
              </li>
            ))}
        </ul>
      </main>
    </>
  )
}
