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
  items,
  setItems
}: {
  items: Rig[]
  setItems: (items: Rig[]) => void
}) {
  const handleDrop = (droppedItem: DropResult) => {
    if (!droppedItem.destination) return
    var updatedList = [...items]
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1)
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem)
    setItems(updatedList)
  }

  const handleDelete = (id: Rig) => {
    const itemIndex = items.findIndex(item => item.id === id.id)
    if (itemIndex === -1) return
    const updatedList = [...items]
    updatedList.splice(itemIndex, 1)
    setTimeout(() => {
      setItems(updatedList)
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
              {items.map((rig, index) => {
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
