import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { TAppState } from './../../redux/index';
import { TNote } from './../../redux/notesReducer/types';
import s from './Notes.module.scss';
import Note from '../Note/Note';
import MyTextarea from '../MyTextarea/MyTextarea';
import Preloader from '../Preloader/Preloader';
import { createNote } from './../../redux/notesReducer/thunks';

export interface INotes {
  notes?: TNote[];
  isInitialized: boolean;
  createNote(title: string): void;
}

/**
 * Компонент всех заметок
 */
const Notes: FunctionComponent<INotes> = (props) => {
  // Props destructuring
  const { notes, isInitialized, createNote } = props;

  // Если приложение не проинициализировано, крутим прелоадер
  if (!isInitialized) {
    return (
      <div className={s.wrapper}>
        <div className={s.preloader}>
          <Preloader />
        </div>
      </div>
    );
  }

  // Handlers
  const textareaOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    createNote(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.addNote}>
        <MyTextarea placeholder={'New note...'} onChange={textareaOnChangeHandler} />
      </div>

      {notes?.map((n) => (
        <Note key={n.id} note={n} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: TAppState) => ({
  notes: state.notes.notes,
  isInitialized: state.app.isInitialized,
});

export default connect(mapStateToProps, { createNote })(Notes);
