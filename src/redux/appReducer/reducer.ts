import { TAppReducerActions, TAppReducerState } from './types';

const initialState: TAppReducerState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action: TAppReducerActions): TAppReducerState => {
  switch (action.type) {
    case 'INIT_APP': {
      return {
        ...state,
        isInitialized: action.isInitialized,
      };
    }

    default:
      return state;
  }
};

export default appReducer;
