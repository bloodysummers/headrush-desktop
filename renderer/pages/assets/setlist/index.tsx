import { ipcRenderer } from 'electron'
import { useMutation, useQuery } from 'react-query'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { useRecoilValue } from 'recoil'
import Head from 'next/head'
import { EditorData, editorState } from '@/state/editor'
import Header from '@/components/header'
import Searchbox from '@/components/searchbox'
import SetlistList from '@/components/setlist-list'
import Modal from '@/components/modal'
import NewSetlistModal from '@/components/new-setlist-modal'
import { useRouter } from 'next/router'

export default function Setlists() {
  const editorData = useRecoilValue<EditorData>(editorState)
  const [term, setTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const { isLoading, error, data } = useQuery('setlistsList', () =>
    ipcRenderer.invoke('get_setlists', { path: editorData.path })
  )

  const newSetlist = useMutation({
    mutationFn: async (name: string) =>
      ipcRenderer.invoke('new_setlist', {
        path: editorData.path,
        name,
        author: 'UserName'
      }),
    onSuccess: (name: string) => {
      setShowModal(false)
      router.push(`/assets/setlist/${name}/editor`)
    }
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  const filteredSetlists = data?.filter(setlist =>
    setlist.toLowerCase().includes(term.toLowerCase())
  )

  return (
    <>
      <Head>
        <title>Headrushfx Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <Header
          title="Setlists"
          backButton={() => ipcRenderer.send('goto_home')}
          cta={{
            text: 'New',
            onClick: () => setShowModal(true)
          }}
        />
        <Searchbox onChange={setTerm} value={term} />
        <SetlistList data={filteredSetlists} href="/assets/setlist/" />
        {typeof window !== 'undefined' &&
          ReactDOM.createPortal(
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <NewSetlistModal
                onConfirm={name => newSetlist.mutate(name)}
                onCancel={() => setShowModal(false)}
              />
            </Modal>,
            document.body
          )}
      </main>
    </>
  )
}
