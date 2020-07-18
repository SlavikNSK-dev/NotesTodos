import { TBaseThunk } from './../index';

export enum EAppActionsTypes {
  INIT_APP = 'APP/INIT_APP',
}

// Тип стейта
export type TAppState = {
  isInitialized: boolean;
};

// Типы экшенов
export type TInitAppAC = {
  type: EAppActionsTypes.INIT_APP;
  isInitialized: boolean;
};

// Общие типы для редюсера
export type TAppActions = TInitAppAC;
export type TAppThunks = TBaseThunk<TAppActions>;
