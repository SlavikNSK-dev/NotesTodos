import React, { FunctionComponent } from 'react';
import cn from 'classnames';
// import types
// import components
import Notes from './../Notes/Notes';
// other imports
import s from './App.module.scss';

export interface IProps {}

/**
 * Корневая компонента приложения
 */
const App: FunctionComponent<IProps> = (): JSX.Element => {
  return (
    <div className={s.app}>
      <h1>React / Redux test todo list</h1>
      <div className="container">
        <div className={s.content}>
          <div className={cn(s.sidebar, s.column)}>Sidebar</div>
          <div className={cn(s.main, s.column)}>
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
