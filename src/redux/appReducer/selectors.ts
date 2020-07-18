import { TAppState } from './../index';

export const getIsInitializedApp = (state: TAppState): boolean => state.app.isInitialized;
