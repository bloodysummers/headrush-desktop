import { useRouter } from 'next/router'
import ReactDOM from 'react-dom'
import ListItem from './list-item'
import Modal from '../modal'
import { useState } from 'react'
import DeleteModal from './delete-modal'
import { useMutation } from 'react-query'
import { ipcRenderer } from 'electron'
import { useRecoilValue } from 'recoil'
import { EditorData, editorState } from '@/state/editor'

export default function SetlistList({
  data,
  href
}: {
  data: string[]
  href?: string
}) {
  const editorData = useRecoilValue<EditorData>(editorState)
  const router = useRouter()
  const [showModal, setShowModal] = useState('')

  const goto = (item: string) => {
    if (href) router.push(`${href}${item}`)
  }

  const removeSetlist = useMutation({
    mutationFn: async (name: string) =>
      ipcRenderer.invoke('remove_setlist', { path: editorData.path, name }),
    onSuccess: () => {
      setShowModal('')
      ipcRenderer.invoke('refresh')
    }
  })

  const onDeleteClick = () => {
    if (showModal) {
      setShowModal(showModal)
      removeSetlist.mutate(showModal)
    }
  }

  return (
    <ul
      className="overflow-y-auto scrollbar-thin scrollbar-track-neutral-600 scrollbar-thumb-presetGreen scrollbar-thumb-rounded-md"
      style={{ height: 'calc(100% - 112px)' }}
    >
      {data &&
        data.map(item => (
          <ListItem
            key={item}
            onClick={() => goto(item)}
            onEdit={() => {
              console.log('Edit')
            }}
            onDelete={() => setShowModal(item)}
          >
            {item.replace('.setlist', '')}
          </ListItem>
        ))}
      {ReactDOM.createPortal(
        <Modal show={!!showModal} onClose={() => setShowModal('')}>
          <DeleteModal
            setlist={showModal}
            onCancel={() => setShowModal('')}
            onConfirm={onDeleteClick}
          />
        </Modal>,
        document.body
      )}
    </ul>
  )
}
