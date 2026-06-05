import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListsState {
  lists: (string[])[]; 
}

const initialState: ListsState = { lists: [] };

const quizSlice = createSlice({
  name: 'quiz', //имя среза
  initialState, //начальное состояние
  reducers: {
    //действие добавить список
    addList: (state, action: PayloadAction<{index: number; items: string[]}>) => {
      const { index, items } = action.payload;
      // добавляем только если ещё нет данных для этого индекса
      if (state.lists[index] === undefined) {
        state.lists[index] = [...items];
      }
    },
    //действие обновить список
    setDraggedItems: (state, action: PayloadAction<{ index: number; items: string[] }>) => {
      const { index, items } = action.payload;
      state.lists[index] = [...items];
    },
    //действие сброс списка
    resetList: (state, action: PayloadAction<{ index: number; items: string[] }>) => {
      const { index, items } = action.payload;
      state.lists[index] = [...items];
    },
  },
});
//экспорт действий и редьюсера
export const { addList, setDraggedItems, resetList } = quizSlice.actions;
export default quizSlice.reducer;