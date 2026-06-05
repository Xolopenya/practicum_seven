import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './testing/features/quizSlice';

export const store = configureStore({ //создаем хранилище
  reducer: {
    quiz: quizReducer, //состояние среза
  },
});

export type RootState = ReturnType<typeof store.getState>; //тип всего состояния 
export type AppDispatch = typeof store.dispatch;// тип диспетчера

export default store;