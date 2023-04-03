import { ipcRenderer } from 'electron'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import Head from 'next/head'
import { EditorData, editorState } from '@/state/editor'
import Header from '@/components/header'
import Searchbox from '@/components/searchbox'
import SetlistList from '@/components/list'

export default function Setlists() {
  const editorData = useRecoilValue<EditorData>(editorState)
  const [term, setTerm] = useState('')

  const { isLoading, error, data } = useQuery('rigsList', () =>
    ipcRenderer.invoke('get_setlists', { path: editorData.path })
  )

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
        />
        <Searchbox onChange={setTerm} value={term} />
        <SetlistList
          data={filteredSetlists}
          href="/assets/setlist/editor/"
          ext=".setlist"
        />
      </main>
    </>
  )
}
