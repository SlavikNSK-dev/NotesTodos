import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { TTodo } from './../../redux/todosReducer/types';
import MyCheckbox from './../MyCheckbox/MyCheckbox';
import s from './Todo.module.scss';
import delIcon from './../../assets/images/icons/cancel_24px_outlined.svg';
import MyTextarea from '../MyTextarea/MyTextarea';
import {
  updateTodoText,
  changeTodoComplited,
  deleteTodo,
  makeOldTodo,
} from './../../redux/todosReducer/thunks';

export interface ITodo {
  todo: TTodo;
  updateTodoText(todoId: string, text: string): void;
  changeTodoComplited(todoId: string): void;
  deleteTodo(todoId: string): void;
  makeOldTodo(todoId: string): void;
}

/**
 * Компонент задания
 */
const Todo: FunctionComponent<ITodo> = (props) => {
  // Props destructuring
  const {
    todo: { id, complited, text, isNew = false },
    updateTodoText,
    changeTodoComplited,
    deleteTodo,
    makeOldTodo,
  } = props;

  // Handlers
  const checkboxChangeHandler = () => {
    changeTodoComplited(id);
  };
  const textareaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateTodoText(id, e.target.value);
    if (isNew) makeOldTodo(id);
  };
  const deleteClickHandler = () => {
    deleteTodo(id);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.checkbox}>
        <MyCheckbox checked={complited} onChange={checkboxChangeHandler} />
      </div>

      <div className={cn(s.content, { [s.isComplited]: complited })}>
        <MyTextarea
          isFocused={isNew}
          value={text}
          disabled={complited}
          placeholder={'Todo text...'}
          onChange={textareaChangeHandler}
        />
      </div>

      <div className={s.actions} onClick={deleteClickHandler}>
        <img src={delIcon} alt="delete todo" />
      </div>
    </div>
  );
};

export default connect(null, {
  updateTodoText,
  changeTodoComplited,
  deleteTodo,
  makeOldTodo,
})(Todo);
