import { TBaseThunk } from './../index';

// Тип стейта
export type TAppReducerState = {
  isInitialized: boolean;
};

// Типы экшенов
export type TInitAppReducerAC = {
  type: 'INIT_APP';
  isInitialized: boolean;
};

// Общие типы для редюсера
export type TAppReducerActions = TInitAppReducerAC;
export type TAppReducerThunks = TBaseThunk<TAppReducerActions>;
