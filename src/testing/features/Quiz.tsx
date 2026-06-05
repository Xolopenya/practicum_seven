import { useState } from 'react';
import { Box, Button, Container, Typography, Paper } from '@mui/material';
import { quiz } from "../quizData";
import Matching from "./Matching";
import SortQuestion from "./SortQuestion";
import ChoiceQuestion from "./ChoiceQuestion";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { resetList } from './quizSlice';

function Quiz() {
  const dispatch = useDispatch(); //для отправки действия в редакс
  // состояние для хранения текстовых результатов
  const [results, setResults] = useState<Record<number, string>>({});
  const [resetKey, setResetKey] = useState(0);

   // текущее состояние списков Redux
  const currentLists = useSelector((state: RootState) => state.quiz.lists); //хук для чтения данных обращаемся к срезу quiz и получаем список для конкретного задания

  //выбираем какой компонент отрисовывать
  const renderTask = (task: typeof quiz[0], index: number) => {
    switch (task.type) {
      case 'M':
        return <Matching key={`${index}-${resetKey}`} index={index} tasks={task.tasks} />;

      case 'S':
        return (
          <SortQuestion
            key={`${index}-${resetKey}`}
            index={index}
            items={task.tasks.map(t => t.question)}
          />
        );

      case 'C':
        return (
          <ChoiceQuestion
            key={`${index}-${resetKey}`}
            index={index}
            tasks={task.tasks}
            multiple={task.multiple || false}
          />
        );

      default:
        return <Typography color="error">Неизвестный тип задания</Typography>;
    }
  };

  const handleCheck = () => {
    const newResults: Record<number, string> = {};

    quiz.forEach((task, index) => {
      const userAnswers = currentLists[index] || [];
      let correctCount = 0;
      let totalQuestions = 0;

      if (task.type === 'M') {
        // сопоставление сравниваем порядок ответов
        const correctAnswers = task.tasks.map(t => t.answer as string);
        userAnswers.forEach((ans, i) => {
          if (ans === correctAnswers[i]) correctCount++;
        });
        totalQuestions = correctAnswers.length;
      }
      else if (task.type === 'S') {
        // правильный порядок порядок questions в tasks
        const correctOrder = task.tasks.map(t => t.question);
        userAnswers.forEach((ans, i) => {
          if (ans === correctOrder[i]) correctCount++;
        });
        totalQuestions = correctOrder.length;
      }
      else if (task.type === 'C') {
        // проверка на answer true
        const correctAnswers = task.tasks
          .filter(t => t.answer === true)
          .map(t => t.question);
        
        if (task.multiple) {
          const allCorrectSelected = correctAnswers.every(ans => userAnswers.includes(ans));
          const noExtraSelected = userAnswers.every(ans => correctAnswers.includes(ans));
          
          if (allCorrectSelected && noExtraSelected) {
            correctCount = correctAnswers.length;
          }
        } else {
          if (userAnswers[0] === correctAnswers[0]) {
            correctCount = 1;
          }
        }
        totalQuestions = correctAnswers.length;
      }

      if (correctCount === totalQuestions) {
        newResults[index] = `Задание ${index + 1}. Все ответы верные.`;
      } else {
        newResults[index] = `Задание ${index + 1}. Верных: ${correctCount} из ${totalQuestions}.`;
      }
    });

    setResults(newResults);
  };

  const handleReset = () => {
    setResults({});
    setResetKey(k => k + 1);
    
    quiz.forEach((task, index) => {
      if (task.type === 'M') {
        const items = task.tasks.map(t => t.answer as string).sort(() => Math.random() - 0.5);
        dispatch(resetList({ index, items }));
      }
      else if (task.type === 'S') {
        const items = task.tasks.map(t => t.question).sort(() => Math.random() - 0.5);
        dispatch(resetList({ index, items }));
      }
      else if (task.type === 'C') {
        dispatch(resetList({ index, items: [] }));
      }
    });
  };

  return (
    <Container maxWidth="md">
      {quiz.map((task, index) => (
        <Box key={task.id} component="section" sx={{ m: 2, p: 2 }}>
          <Typography variant="h5" gutterBottom>
            {index + 1}. {task.title}
          </Typography>
          {renderTask(task, index)}
        </Box>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'space-around', my: 4 }}>
        <Button variant="contained" color="primary" onClick={handleCheck}>
          Проверить
        </Button>
        <Button variant="contained" color="secondary" onClick={handleReset}>
          Начать снова
        </Button>
      </Box>

      {Object.keys(results).length > 0 && (
        <Paper sx={{ p: 3, mt: 2, bgcolor: '#f5f5f5' }}>
          <Typography variant="h6" align="center" gutterBottom>
            Результаты теста
          </Typography>
          {Object.values(results).map((text, idx) => (
            <Typography key={idx} variant="body1" align="center" sx={{ mb: 1 }}>
              {text}
            </Typography>
          ))}
        </Paper>
      )}
    </Container>
  );
}

export default Quiz;