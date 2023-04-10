import { useState } from 'react'
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable
} from 'react-beautiful-dnd'
import { SetlistWithFullRigs } from '@/types/setlist'
import ListItem from './list-item'
import { Rig } from '@/types/rig'

export default function EditableSetlist({
  items
}: {
  items: SetlistWithFullRigs
}) {
  const [editableItems, setEditableItems] = useState(items.rigs_data)

  const handleDrop = (droppedItem: DropResult) => {
    if (!droppedItem.destination) return
    var updatedList = [...editableItems]
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1)
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem)
    setEditableItems(updatedList)
  }

  const handleDelete = (id: Rig) => {
    const itemIndex = editableItems.findIndex(item => item.id === id.id)
    if (itemIndex === -1) return
    const updatedList = [...editableItems]
    updatedList.splice(itemIndex, 1)
    setTimeout(() => {
      setEditableItems(updatedList)
    }, 150)
  }

  return (
    <div className="p-4 overflow-y-auto scrollbar-thin h-full scrollbar-track-neutral-600 scrollbar-thumb-presetGreen scrollbar-thumb-rounded-md">
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {provided => (
            <div
              className="list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {editableItems.map((rig, index) => {
                return (
                  <Draggable key={rig.id} draggableId={rig.id} index={index}>
                    {provided => (
                      <div
                        className="item-container h-16"
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <ListItem
                          item={rig}
                          onDelete={() => handleDelete(rig)}
                        />
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
