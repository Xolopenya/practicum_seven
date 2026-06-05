import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemButton, ListItemText, Checkbox } from '@mui/material';
import { setDraggedItems } from './quizSlice';
import { RootState } from '../../store';
import { tTasks } from '../quizData';

interface ChoiceQuestionProps {
  index: number;
  tasks: tTasks;       
  multiple: boolean;
}

export function ChoiceQuestion({ index, tasks, multiple }: ChoiceQuestionProps) {
  const dispatch = useDispatch();
  const selectedInRedux = useSelector((state: RootState) => state.quiz.lists[index]) || [];
  const [selected, setSelected] = useState<string[]>([]);
  
  // извлекаем варианты из tasks 
  const options = useMemo(() => tasks.map(t => t.question), [tasks]);
  
  // перемешиваем опции
  const shuffledOptions = useMemo(() => 
    [...options].sort(() => Math.random() - 0.5),
  [options]);

  useEffect(() => {
    setSelected(selectedInRedux);
  }, [selectedInRedux]);

  const handleChange = (option: string) => {
    let newSelected: string[];
    
    if (multiple) {
      newSelected = selected.includes(option)
        ? selected.filter(item => item !== option)
        : [...selected, option];
    } else {
      newSelected = selected.includes(option) ? [] : [option];
    }
    
    setSelected(newSelected);
    dispatch(setDraggedItems({ index, items: newSelected }));
  };

  return (
    <List>
      {shuffledOptions.map((opt) => (
        <ListItem key={opt} disablePadding>
          <ListItemButton
            onClick={() => handleChange(opt)}
            sx={{
              border: '1px solid gray',
              borderRadius: '5px',
              mb: 1,
              bgcolor: selected.includes(opt) ? 'primary.light' : 'transparent',
              '&:hover': { bgcolor: 'primary.hover' }
            }}
          >
            {multiple && (
              <Checkbox
                edge="start"
                checked={selected.includes(opt)}
                tabIndex={-1}
                disableRipple
              />
            )}
            <ListItemText primary={opt} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default ChoiceQuestion;