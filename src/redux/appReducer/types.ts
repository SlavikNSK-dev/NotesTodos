// Initial state type
export type TAppReducerState = {
  isInitialized: boolean;
};

// Action creators types
export type TInitAppReducerAC = {
  type: 'INIT_APP';
  isInitialized: boolean;
};

export type TAppReducerActions = TInitAppReducerAC;
