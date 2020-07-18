import React, { FunctionComponent } from 'react';
import { Provider, connect } from 'react-redux';
import { Store } from 'redux';
import { BrowserRouter } from 'react-router-dom';
// import types
import { TAppState } from './../../redux/index';
// import components
import App from './App';
// other imports
import { initApp } from './../../redux/appReducer/thunks';
import { getIsInitializedApp } from '../../redux/appReducer/selectors';

export interface IOwnProps {
  store: Store<TAppState>;
}
interface IStateProps {
  isInitialized: boolean;
}
interface IDispatchProps {
  initApp(): void;
}

export type TProps = IOwnProps & IStateProps & IDispatchProps;

/**
 * Контейнер над корневой компонентой
 */
const AppContainer: FunctionComponent<TProps> = (props): JSX.Element => {
  // Props destructuring
  const { store, isInitialized, initApp } = props;

  if (!isInitialized) initApp();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

const mapStateToProps = (state: TAppState, ownProps: IOwnProps): IStateProps => ({
  isInitialized: getIsInitializedApp(state),
});

export default connect<IStateProps, IDispatchProps, IOwnProps, TAppState>(mapStateToProps, {
  initApp,
} as IDispatchProps)(AppContainer);
