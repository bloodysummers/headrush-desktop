import { ipcRenderer } from 'electron'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SetlistWithFullRigs } from '@/types/setlist'
import { useRecoilValue } from 'recoil'
import { editorState } from '@/state/editor'
import { useQuery } from 'react-query'
import Header from '@/components/header'
import RigList from '@/components/rig-list'
import Searchbox from '@/components/searchbox'
import { useState } from 'react'
import spacing from '@/tokens/spacing'

export default function SetlistEditor() {
  const router = useRouter()
  const editorData = useRecoilValue(editorState)
  const setlistName = router.query.setlist as string
  const [term, setTerm] = useState('')

  const {
    isLoading,
    error,
    data: setlist
  } = useQuery<SetlistWithFullRigs>(
    `setlistData-${setlistName}`,
    () =>
      ipcRenderer.invoke('get_setlist', {
        path: editorData.path,
        name: setlistName
      }),
    {
      enabled: !!setlistName
    }
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  const filteredRigs = setlist?.rigs_data.filter(rig =>
    rig.name.toLowerCase().includes(term.toLowerCase())
  )

  const onRigClick = (name: string) => {
    router.push(`/assets/rig/editor/${name}`)
  }

  return (
    <>
      <Head>
        <title>Headrushfx Rig Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <Header
          title={setlistName}
          backButton={() => ipcRenderer.send('go_back')}
        />
        <Searchbox onChange={setTerm} value={term} />
        <div
          style={{
            height: `calc(100% - ${
              spacing.headerHeight + spacing.searchBoxHeight
            }px)`
          }}
        >
          <RigList data={filteredRigs} onClick={onRigClick} />
        </div>
      </main>
    </>
  )
}
