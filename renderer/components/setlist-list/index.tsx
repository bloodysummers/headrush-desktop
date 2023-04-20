import { useRouter } from 'next/router'
import ReactDOM from 'react-dom'
import ListItem from './list-item'
import Modal from '../modal'
import { useState } from 'react'
import DeleteModal from './delete-modal'
import { useMutation, useQueryClient } from 'react-query'
import { ipcRenderer } from 'electron'
import spacing from '@/tokens/spacing'

export default function SetlistList({
  data,
  href
}: {
  data: string[]
  href?: string
}) {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [showModal, setShowModal] = useState('')

  const goto = (item: string) => {
    if (href) router.push(`${href}${item}`)
  }

  const removeSetlist = useMutation({
    mutationFn: async (name: string) =>
      ipcRenderer.invoke('remove_setlist', { name }),
    onSuccess: () => {
      setShowModal('')
      queryClient.invalidateQueries(['setlistsList'])
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
      style={{
        height: `calc(100% - ${
          spacing.headerHeight + spacing.searchBoxHeight
        }px)`
      }}
    >
      {data &&
        data.map(item => (
          <ListItem
            key={item}
            onClick={() => goto(item)}
            onEdit={() => goto(`${item}/editor`)}
            onDelete={() => setShowModal(item)}
          >
            {item.replace('.setlist', '')}
          </ListItem>
        ))}
      {typeof window !== 'undefined' &&
        ReactDOM.createPortal(
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
