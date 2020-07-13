import React, { FunctionComponent } from 'react';
import { Store } from 'redux';
import { Provider, connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { TAppState } from './../../redux/index';
import { initApp } from './../../redux/appReducer/thunks';
import App from './App';

export interface IAppContainer {
  store: Store<TAppState>;
  isInitialized: boolean;
  initApp(): void;
}

/**
 * Контейнер над корневой компонентой
 */
const AppContainer: FunctionComponent<IAppContainer> = (props) => {
  const { store, isInitialized, initApp } = props;

  if (!isInitialized) {
    // Инициализируем приложение, после подгрузки заметок и дел
    initApp();
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

const mapStateToProps = (state: TAppState) => ({
  isInitialized: state.app.isInitialized,
});

export default connect(mapStateToProps, { initApp })(AppContainer);
