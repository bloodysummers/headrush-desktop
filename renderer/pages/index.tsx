import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { editorState } from '../state/editor'
import Button from '@/components/button'
import Input from '@/components/input'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [editor, setEditor] = useRecoilState(editorState)

  const [path, setPath] = useState<string>(editor.path)

  const onChange = value => {
    setPath(value)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEditor({ path: path || '' })
  }

  return (
    <>
      <Head>
        <title>Headrushfx Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-row items-center justify-center">
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
          {editor.path && (
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
      </main>
    </>
  )
}
