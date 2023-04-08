import { ipcRenderer } from 'electron'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import Header from '@/components/header'
import RigList from '@/components/rig-list'
import { EditorData, editorState } from '../../../state/editor'
import Searchbox from '@/components/searchbox'
import { useState } from 'react'
import { Rig as RigType } from '@/types/rig'

export default function Rig() {
  const editorData = useRecoilValue<EditorData>(editorState)
  const [term, setTerm] = useState('')

  const { isLoading, error, data } = useQuery<RigType[]>('rigsList', () =>
    ipcRenderer.invoke('get_rigs', { path: editorData.path })
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  const filteredRigs = data?.filter(rig =>
    rig.name.toLowerCase().includes(term.toLowerCase())
  )

  return (
    <>
      <Head>
        <title>Headrushfx Rig Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <Header title="Rigs" backButton={() => ipcRenderer.send('goto_home')} />
        <Searchbox onChange={setTerm} value={term} />
        <RigList data={filteredRigs} href="/assets/rig/editor/" />
      </main>
    </>
  )
}
