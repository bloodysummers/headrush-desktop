import { ipcRenderer } from 'electron'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import Head from 'next/head'
import { EditorData, editorState } from '@/state/editor'

export default function Setlists() {
  const editorData = useRecoilValue<EditorData>(editorState)

  const { isLoading, error, data } = useQuery('rigsList', () =>
    ipcRenderer.invoke('get_setlists', { path: editorData.path })
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }
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
        {data?.map(setlist => (
          <div key={setlist}>
            <h2>{setlist}</h2>
          </div>
        ))}
      </main>
    </>
  )
}
