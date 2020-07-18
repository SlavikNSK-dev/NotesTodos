import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
// import types
import { TTodo } from './../../redux/todosReducer/types';
import { TAppState } from '../../redux';
// import components
import MyCheckbox from './../MyCheckbox/MyCheckbox';
import MyTextarea from '../MyTextarea/MyTextarea';
// other imports
import {
  updateTodoText,
  changeTodoComplited,
  deleteTodo,
  makeOldTodo,
} from './../../redux/todosReducer/thunks';
import delIcon from './../../assets/images/icons/cancel_24px_outlined.svg';
import s from './Todo.module.scss';

export interface IOwnProps {
  todo: TTodo;
}
interface IStateProps {}
interface IDispatchProps {
  updateTodoText(todoId: string, text: string): void;
  changeTodoComplited(todoId: string): void;
  deleteTodo(todoId: string): void;
  makeOldTodo(todoId: string): void;
}

export type TProps = IOwnProps & IStateProps & IDispatchProps;

/**
 * Компонент задания
 */
const Todo: FunctionComponent<TProps> = (props): JSX.Element => {
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

const mapStateToProps = (state: TAppState, ownProps: IOwnProps): IStateProps => ({});

export default connect<IStateProps, IDispatchProps, IOwnProps, TAppState>(mapStateToProps, {
  updateTodoText,
  changeTodoComplited,
  deleteTodo,
  makeOldTodo,
} as IDispatchProps)(Todo);
