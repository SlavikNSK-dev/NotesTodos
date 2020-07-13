import React, { FunctionComponent } from 'react';
import { v1 as uuidv1 } from 'uuid';
import s from './TodoList.module.scss';
import { TTodo } from './../../redux/todosReducer/types';
import Todo from './../Todo/Todo';
import MyTextarea from '../MyTextarea/MyTextarea';
import { connect } from 'react-redux';
import { createTodo } from './../../redux/todosReducer/thunks';

export interface ITodoList {
  noteId: string;
  todos: TTodo[];
  createTodo(todo: TTodo): void;
}

/**
 * Компонент списка дел
 */
const TodoList: FunctionComponent<ITodoList> = (props) => {
  const { noteId, todos, createTodo } = props;

  const textareaOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTodo: TTodo = {
      id: uuidv1(),
      noteId: noteId,
      text: e.target.value,
      isNew: true,
      complited: false,
    };
    createTodo(newTodo);
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
