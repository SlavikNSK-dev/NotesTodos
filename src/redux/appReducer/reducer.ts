import { TAppActions, TAppState, EAppActionsTypes } from './types';

const initialState: TAppState = {
  isInitialized: false,
};

const appReducer = (state = initialState, action: TAppActions): TAppState => {
  switch (action.type) {
    case EAppActionsTypes.INIT_APP: {
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
