import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useEffect, useState } from 'react'
import Button from '@/components/button'
import Input from '@/components/input'
import { useRouter } from 'next/router'
import { ipcRenderer } from 'electron'
import { EditorData, defaultConfig } from '../types/editor'

export default function Home() {
  const router = useRouter()
  const [editor, setEditor] = useState<EditorData>(defaultConfig)

  const [path, setPath] = useState<string>(editor?.hrPath)

  const onChange = value => {
    setPath(value)
  }

  useEffect(() => {
    getEditorData()
  }, [])

  useEffect(() => {
    setPath(editor?.hrPath)
  }, [editor])

  const getEditorData = async () => {
    const editorData = (await ipcRenderer.invoke('get_config')) as EditorData
    setEditor(editorData)
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const editorData = (await ipcRenderer.invoke('set_config', {
      ...editor,
      hrPath: path
    })) as EditorData
    setEditor(editorData)
  }

  return (
    <>
      <Head>
        <title>Headrushfx Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="h-screen flex flex-col items-center justify-center">
        <div className="bg-neutral-500 content-center p-4 bg-opacity-30">
          <form
            onSubmit={onSubmit}
            className="bg-neutral-400 text-center p-4 bg-opacity-20"
          >
            <Image
              src={'/img/headrush-logo.png'}
              width={342}
              height={60}
              alt="Headrush"
              className="m-4 inline-block"
            />
            <h1 className="text-white uppercase mb-8">
              Pedalboard rig and setlist editor
            </h1>
            <Input
              type="text"
              name="path"
              onChange={onChange}
              value={path}
              autoFocus
            />
            <Button type="submit">Read directory</Button>
          </form>
          {editor?.hrPath && (
            <div className="flex flex-row shrink-0">
              <Button
                className="flex-1"
                onClick={() => router.push('/assets/setlist')}
              >
                Setlists
              </Button>
              <Button
                className="flex-1"
                onClick={() => router.push('/assets/rig')}
              >
                Rigs
              </Button>
            </div>
          )}
        </div>
        <div className="text-neutral-300 text-sm text-center mt-4 px-2">
          All trademarks, logos and brand names are the property of their
          respective owners. All company, product and service names used in this
          application are for identification purposes only. Use of these
          names,trademarks and brands does not imply endorsement.
        </div>
      </main>
    </>
  )
}
