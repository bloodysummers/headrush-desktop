import Head from 'next/head'
import { useRouter } from 'next/router'
import { ipcRenderer } from 'electron'
import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'

import { Module, RigWithContent } from '@/types/rig'
import { editorState } from '@/state/editor'
import Header from '@/components/header'
import Chain from '@/components/chain'

export default function RigEditor() {
  const router = useRouter()
  const editorData = useRecoilValue(editorState)
  const rigName = router.query.rig as string

  const {
    isLoading,
    error,
    data: rig
  } = useQuery(
    'rigData',
    () =>
      fetch(`/api/rig/${rigName}?path=${editorData.path}`).then(
        res => res.json() as Promise<RigWithContent>
      ),
    {
      enabled: !!rigName
    }
  )

  const rigPatch = rig?.content.data.Patch
  const rigChain = rigPatch?.children.Chain
  const patchElements = rigPatch?.children

  const input = patchElements?.Input
  const output = patchElements?.Output
  const mix = patchElements?.Mix

  if (isLoading) {
    return <p>Loading...</p>
  }

  const titleDisplay = (router.query.rig as string).replace('.rig', '')
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <Header
          title={titleDisplay}
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
