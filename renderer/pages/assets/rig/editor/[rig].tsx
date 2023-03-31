import Head from 'next/head'
import { useRouter } from 'next/router'
import { RigWithContent } from '@/types/rig'
import { useRecoilValue } from 'recoil'
import { editorState } from '@/state/editor'
import { useQuery } from 'react-query'
import Module from '@/components/module'

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
  const modules = rigChain?.children
    ? Object.keys(rigChain.children).filter(
        element => element.indexOf('ModuleType') > -1
      )
    : []

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
        <h1>Rig Editor</h1>
        <h2>Rig: {router.query.rig}</h2>
        <h4>Author: {rig?.author}</h4>
        <h3>Patch</h3>
        <div>
          {modules.map(module => {
            const chainItem = rigChain?.children[module]
            const patchItem = rigPatch?.children[chainItem?.string || '']
            return (
              <Module
                key={module}
                name={chainItem?.string as string}
                data={patchItem}
              />
            )
          })}
        </div>
      </main>
    </>
  )
}
