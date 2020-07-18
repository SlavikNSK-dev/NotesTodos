import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
// import types
import { TTodos } from './../../redux/todosReducer/types';
import { TAppState } from '../../redux';
// import components
import Todo from './../Todo/Todo';
import MyTextarea from '../MyTextarea/MyTextarea';
// other imports
import { createTodo } from './../../redux/todosReducer/thunks';
import s from './TodoList.module.scss';

export interface IOwnProps {
  noteId: string;
  todos: TTodos;
}
interface IStateProps {}
interface IDispatchProps {
  createTodo(noteId: string, todoText: string): void;
}

export type TProps = IOwnProps & IStateProps & IDispatchProps;

/**
 * Компонент списка дел
 */
const TodoList: FunctionComponent<TProps> = (props): JSX.Element => {
  // Props destructuring
  const { noteId, todos, createTodo } = props;

  // Handlers
  const textareaOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    createTodo(noteId, e.target.value);
  };

  const mappedTodos = todos.allIds?.map((todoId) => (
    <Todo key={todoId} todo={todos.byId[todoId]} />
  ));

  return (
    <div className={s.wrapper}>
      {mappedTodos}
      <div className={s.newTodo}>
        <span></span>
        <MyTextarea placeholder={'New todo text...'} onChange={textareaOnChangeHandler} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: TAppState, ownProps: IOwnProps): IStateProps => ({});

export default connect<IStateProps, IDispatchProps, IOwnProps, TAppState>(mapStateToProps, {
  createTodo,
} as IDispatchProps)(TodoList);
