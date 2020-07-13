import { TInitAppReducerAC } from './types';

export const initAppReducerAC = (isInitialized: boolean): TInitAppReducerAC => ({
  type: 'INIT_APP',
  isInitialized,
});
