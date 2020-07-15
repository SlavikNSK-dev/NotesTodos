import React, { FunctionComponent } from 'react';
import s from './TodoList.module.scss';
import { TTodo } from './../../redux/todosReducer/types';
import Todo from './../Todo/Todo';
import MyTextarea from '../MyTextarea/MyTextarea';
import { connect } from 'react-redux';
import { createTodo } from './../../redux/todosReducer/thunks';

export interface ITodoList {
  noteId: string;
  todos: TTodo[];
  createTodo(noteId: string, todoText: string): void;
}

/**
 * Компонент списка дел
 */
const TodoList: FunctionComponent<ITodoList> = (props) => {
  // Props destructuring
  const { noteId, todos, createTodo } = props;

  // Handlers
  const textareaOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    createTodo(noteId, e.target.value);
  };

  return (
    <div className={s.wrapper}>
      {todos?.map((t) => {
        return <Todo key={t.id} todo={t} />;
      })}
      <div className={s.newTodo}>
        <span></span>
        <MyTextarea placeholder={'New todo text...'} onChange={textareaOnChangeHandler} />
      </div>
    </div>
  );
};

export default connect(null, { createTodo })(TodoList);
