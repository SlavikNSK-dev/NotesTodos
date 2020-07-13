import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { TNote } from './../../redux/notesReducer/types';
import s from './Note.module.scss';
import editIcon from './../../assets/images/icons/edit_24px_outlined.svg';
import delIcon from './../../assets/images/icons/clear_24px_outlined.svg';
import TodoList from '../TodoList/TodoList';
import { deleteNote, updateNoteTitle, makeOldNote } from './../../redux/notesReducer/thunks';
import { TAppState } from '../../redux';
import { TTodo } from '../../redux/todosReducer/types';
import MyTextarea from '../MyTextarea/MyTextarea';

export interface INote {
  note: TNote;
  todos: TTodo[];
  updateNoteTitle(noteId: string, title: string): void;
  deleteNote(noteId: string): void;
  makeOldNote(noteId: string): void;
}

/**
 * Компонент заметки
 */
const Note: FunctionComponent<INote> = (props) => {
  const { note, todos, updateNoteTitle, deleteNote, makeOldNote } = props;
  const filteredTodos = todos.filter((t) => t.noteId === note.id);

  const deleteNoteHandler = () => {
    deleteNote(note.id);
  };

  const titleChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateNoteTitle(note.id, e.target.value);
    if (note.isNew) {
      makeOldNote(note.id);
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.noteHeader}>
        <div className={s.title}>
          <MyTextarea
            isFocused={note.isNew}
            value={note?.title}
            placeholder={'Note title...'}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={s.actions}>
          <span>
            <img src={editIcon} alt="edit note" />
          </span>
          <span>
            <img src={delIcon} alt="delete note" onClick={deleteNoteHandler} />
          </span>
        </div>
      </div>

      <TodoList noteId={note?.id} todos={filteredTodos} />

      <div className={s.noteFooter}>
        <span>{filteredTodos.length} todos at all</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: TAppState) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { deleteNote, updateNoteTitle, makeOldNote })(Note);
