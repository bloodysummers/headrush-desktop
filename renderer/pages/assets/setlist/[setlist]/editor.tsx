import { ipcRenderer } from 'electron'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SetlistWithFullRigs } from '@/types/setlist'
import { useRecoilValue } from 'recoil'
import { editorState } from '@/state/editor'
import { useMutation, useQuery } from 'react-query'
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

  const removeSetlist = useMutation({
    mutationFn: async (data: { name: string; setlist: SetlistWithFullRigs }) =>
      ipcRenderer.invoke('save_setlist', { path: editorData.path, data })
  })

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

  const onSave = () => {
    const newSetlist: SetlistWithFullRigs = {
      ...setlist
    }
    newSetlist.rigs_data = editableSetlist
    newSetlist.rig_names = editableSetlist.map(rig => rig.name)
    newSetlist.rigs = editableSetlist.map(rig => rig.id)

    removeSetlist.mutate({
      name: setlistName,
      setlist: newSetlist
    })
  }

  return (
    <>
      <Head>
        <title>Headrushfx Rig Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="h-screen">
        <Header
          title={setlistName}
          backButton={() => ipcRenderer.send('go_back')}
          cta={{
            text: 'Save',
            onClick: onSave
          }}
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
