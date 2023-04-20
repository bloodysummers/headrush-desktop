import { ipcRenderer } from 'electron'
import Head from 'next/head'
import { useQuery } from 'react-query'
import Header from '@/components/header'
import RigList from '@/components/rig-list'
import Searchbox from '@/components/searchbox'
import { useState } from 'react'
import { Rig as RigType } from '@/types/rig'
import { useRouter } from 'next/router'
import spacing from '@/tokens/spacing'

export default function Rig() {
  const router = useRouter()
  const [term, setTerm] = useState('')

  const { isLoading, error, data } = useQuery<RigType[]>('rigsList', () =>
    ipcRenderer.invoke('get_rigs')
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

  const gotoRig = (rig: RigType) => {
    router.push(`/assets/rig/editor/${rig.name}`)
  }

  return (
    <>
      <Head>
        <title>Headrushfx Rig Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="h-screen">
        <Header title="Rigs" backButton={() => ipcRenderer.send('goto_home')} />
        <Searchbox onChange={setTerm} value={term} />
        <div
          style={{
            height: `calc(100% - ${
              spacing.headerHeight + spacing.searchBoxHeight
            }px)`
          }}
        >
          <RigList data={filteredRigs} onClick={gotoRig} />
        </div>
      </main>
    </>
  )
}
