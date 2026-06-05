import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import { SortableItem } from '../components/SortableItem';
import { setDraggedItems } from '../features/quizSlice';
import { RootState } from '../../store';

interface ComponentProps {
  index: number;
  answers: string[];
}

export function SortableList({ index, answers }: ComponentProps) {
  const dispatch = useDispatch();
  
  const arr = useSelector((state: RootState) => state.quiz.lists[index]);
  const draggedItems = arr || answers; // fallback на начальные ответы, если в Redux пусто

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = draggedItems.indexOf(active.id as string);
      const newIndex = draggedItems.indexOf(over.id as string);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        const newList = arrayMove(draggedItems, oldIndex, newIndex);
        dispatch(setDraggedItems({ index, items: newList }));
      }
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={draggedItems} strategy={verticalListSortingStrategy}>
        <List>
          {draggedItems.map((item) => (
            <SortableItem key={item} item={item} />
          ))}
        </List>
      </SortableContext>
    </DndContext>
  );
}

export default SortableList;