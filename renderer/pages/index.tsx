import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { editorState } from '../state/editor'

export default function Home() {
  const router = useRouter()
  const setEditor = useSetRecoilState(editorState)

  const [path, setPath] = useState<string>()

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setPath(e.currentTarget.value)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEditor({ path: path || '' })
    router.push('/assets')
  }

  return (
    <>
      <Head>
        <title>Headrushfx Editor</title>
        <meta name="description" content="Edit rigs and setlists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form onSubmit={onSubmit}>
          <h1>Write the path of your Headrush assets</h1>
          <input type="text" name="path" onChange={onChange} />
          <button type="submit">Read directory</button>
        </form>
      </main>
    </>
  )
}
