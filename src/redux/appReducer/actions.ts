import { TInitAppAC, EAppActionsTypes } from './types';

export const initAppReducerAC = (isInitialized: boolean): TInitAppAC => ({
  type: EAppActionsTypes.INIT_APP,
  isInitialized,
});
