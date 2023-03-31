import Head from 'next/head'
import { useRouter } from 'next/router'
import { RigWithContent } from '@/types/rig'
import { useRecoilValue } from 'recoil'
import { editorState } from '@/state/editor'
import { useQuery } from 'react-query'

export default function SetlistEditor() {
  const router = useRouter()
  const editorData = useRecoilValue(editorState)
  const setlistName = router.query.setlist as string

  const {
    isLoading,
    error,
    data: rig
  } = useQuery(
    'rigData',
    () =>
      fetch(`/api/setlist/${setlistName}?path=${editorData.path}`).then(
        res => res.json() as Promise<RigWithContent>
      ),
    {
      enabled: !!setlistName
    }
  )

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
        <h1>Setlist Editor</h1>
        <h2>Setlist: {setlistName}</h2>
      </main>
    </>
  )
}
