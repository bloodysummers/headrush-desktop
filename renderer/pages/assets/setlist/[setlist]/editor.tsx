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
import { useEffect, useState } from 'react'
import { Rig } from '@/types/rig'
import EditableSetlist from '@/components/editable-setlist'
import spacing from '@/tokens/spacing'

export default function SetlistEditor() {
  const router = useRouter()
  const editorData = useRecoilValue(editorState)
  const setlistName = router.query.setlist as string
  const [term, setTerm] = useState('')

  const { isLoading, error, data } = useQuery<Rig[]>('rigsList', () =>
    ipcRenderer.invoke('get_rigs', { path: editorData.path })
  )

  const {
    isLoading: loadingSetlist,
    error: errorSetlist,
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
  const [editableSetlist, setEditableSetlist] = useState(setlist?.rigs_data)

  useEffect(() => {
    setEditableSetlist(setlist?.rigs_data)
  }, [setlist])

  if (isLoading || loadingSetlist) {
    return <p>Loading...</p>
  }

  if (error || errorSetlist) {
    return <p>Error</p>
  }

  const filteredRigs = data?.filter(rig =>
    rig.name.toLowerCase().includes(term.toLowerCase())
  )

  const onRigClick = (rig: Rig) => {
    const newItems = [...editableSetlist]
    newItems.push(rig)
    setEditableSetlist(newItems)
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
        <div
          className="flex flex-row"
          style={{ height: `calc(100% - ${spacing.headerHeight}px)` }}
        >
          <div className="flex-1">
            <Searchbox onChange={setTerm} value={term} />
            <div
              style={{ height: `calc(100% - ${spacing.searchBoxHeight}px)` }}
            >
              <RigList data={filteredRigs} onClick={onRigClick} />
            </div>
          </div>
          <div className="flex-1 h-full">
            {editableSetlist && (
              <EditableSetlist
                items={editableSetlist}
                setItems={setEditableSetlist}
              />
            )}
          </div>
        </div>
      </main>
    </>
  )
}
