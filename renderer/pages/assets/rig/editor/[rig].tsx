import Head from 'next/head'
import { useRouter } from 'next/router'
import { ipcRenderer } from 'electron'
import { useQuery } from 'react-query'

import { Module } from '@/types/rig'
import Header from '@/components/header'
import Chain from '@/components/chain'

export default function RigEditor() {
  const router = useRouter()
  const rigName = router.query.rig as string

  const {
    isLoading,
    error,
    data: rig
  } = useQuery(
    `rigData-${rigName}`,
    () =>
      ipcRenderer.invoke('get_rig', {
        name: rigName
      }),
    {
      enabled: !!rigName
    }
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  const rigPatch = rig?.content.data.Patch
  const rigChain = rigPatch?.children.Chain
  const patchElements = rigPatch?.children

  const input = patchElements?.Input
  const output = patchElements?.Output
  const mix = patchElements?.Mix

  const modules = new Array(11).fill('').map((_, i) => `ModuleType${i + 1}`)
  const modulesWithData: Module[] = modules.map((module, i) => {
    const chainItem = rigChain?.children[module]
    const patchItem = rigPatch?.children[chainItem?.string || '']
    return {
      order: i + 1,
      name: module,
      data: {
        chain: chainItem,
        ...patchItem
      }
    }
  })

  return (
    <>
      <Head>
        <title>Headrushfx Rig Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="h-screen">
        <Header
          title={rigName}
          backButton={() => ipcRenderer.send('go_back')}
        />
        <Chain
          modules={modulesWithData}
          input={input}
          output={output}
          mix={mix}
        />
      </main>
    </>
  )
}
