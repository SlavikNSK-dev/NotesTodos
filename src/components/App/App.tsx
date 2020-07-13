import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import Notes from './../Notes/Notes';
import s from './App.module.scss';

export interface IApp {}

/**
 * Корневая компонента приложения
 */
const App: FunctionComponent<IApp> = () => {
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
