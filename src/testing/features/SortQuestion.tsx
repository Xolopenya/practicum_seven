import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { List } from '@mui/material';
import { SortableItem } from '../components/SortableItem';
import { addList, setDraggedItems } from './quizSlice';
import { RootState } from '../../store';

interface SortQuestionProps {
  index: number;
  items: string[];  
}

export function SortQuestion({ index, items }: SortQuestionProps) {
  const dispatch = useDispatch();
  
  const shuffledItems = useMemo(() => 
    [...items].sort(() => Math.random() - 0.5),
  [items]);

  useEffect(() => {
    dispatch(addList({ index, items: shuffledItems }));
  }, [dispatch, index]);

  const currentItems = useSelector((state: RootState) => state.quiz.lists[index]);
  const itemsToRender = currentItems || shuffledItems;

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = itemsToRender.indexOf(active.id as string);
      const newIndex = itemsToRender.indexOf(over.id as string);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        const newItems = arrayMove(itemsToRender, oldIndex, newIndex);
        dispatch(setDraggedItems({ index, items: newItems }));
      }
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={itemsToRender} strategy={verticalListSortingStrategy}>
        <List>
          {itemsToRender.map((item) => (
            <SortableItem key={item} item={item} />
          ))}
        </List>
      </SortableContext>
    </DndContext>
  );
}

export default SortQuestion;