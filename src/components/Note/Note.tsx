import React, { FunctionComponent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ClickAwayListener } from '@material-ui/core';
import cn from 'classnames';
// import types
import { TNote } from './../../redux/notesReducer/types';
import { TAppState } from './../../redux/index';
import { TTodos } from './../../redux/todosReducer/types';
// import components
import TodoList from '../TodoList/TodoList';
import MyTextarea from '../MyTextarea/MyTextarea';
// other imports
import { deleteNote, updateNoteTitle, makeOldNote } from './../../redux/notesReducer/thunks';
import { getTodosByNoteId } from '../../redux/todosReducer/selectors';
import editIcon from './../../assets/images/icons/edit_24px_outlined.svg';
import delIcon from './../../assets/images/icons/clear_24px_outlined.svg';
import s from './Note.module.scss';

export interface IOwnProps {
  note: TNote;
}
interface IStateProps {
  todos: TTodos;
}
interface IDispatchProps {
  updateNoteTitle(noteId: string, title: string): void;
  deleteNote(noteId: string): void;
  makeOldNote(noteId: string): void;
}

export type TProps = IOwnProps & IStateProps & IDispatchProps;

/**
 * Компонент заметки
 */
const Note: FunctionComponent<TProps> = (props): JSX.Element => {
  // Props destructuring
  const { note, todos, updateNoteTitle, deleteNote, makeOldNote } = props;

  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    if (note.isNew) setEditMode(true);
  }, [note.isNew]);

  console.log('render Note');

  // Handlers
  const clickAwayHandler = () => {
    setEditMode(false);
    if (note.isNew) makeOldNote(note.id);
  };
  const doubleClickHandler = (): void => {
    setEditMode(true);
  };
  const titleChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    updateNoteTitle(note.id, e.target.value);
    if (note.isNew) makeOldNote(note.id);
  };
  const editNoteHandler = (): void => {
    setEditMode(true);
  };
  const deleteNoteHandler = (): void => {
    deleteNote(note.id);
  };

  return (
    <ClickAwayListener onClickAway={clickAwayHandler}>
      <div
        className={cn(s.wrapper, { [s.overlayed]: !editMode })}
        onDoubleClick={doubleClickHandler}
      >
        <div className={s.noteHeader}>
          <div className={s.title}>
            <MyTextarea
              isFocused={note?.isNew}
              value={note?.title}
              placeholder={'Note title...'}
              onChange={titleChangeHandler}
            />
          </div>
          <div className={s.actions}>
            <span>
              <img src={editIcon} alt="edit note" onClick={editNoteHandler} />
            </span>
            <span>
              <img src={delIcon} alt="delete note" onClick={deleteNoteHandler} />
            </span>
          </div>
        </div>

        <TodoList noteId={note?.id} todos={todos} />

        <div className={s.noteFooter}>
          <span>{note?.todosCount} todos at all</span>
        </div>
      </div>
    </ClickAwayListener>
  );
};

const mapStateToProps = (state: TAppState, ownProps: IOwnProps): IStateProps => ({
  todos: getTodosByNoteId(state, ownProps.note.id),
});

export default connect<IStateProps, IDispatchProps, IOwnProps, TAppState>(mapStateToProps, {
  deleteNote,
  updateNoteTitle,
  makeOldNote,
} as IDispatchProps)(Note);
