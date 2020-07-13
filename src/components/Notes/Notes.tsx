import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
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
  createNote(note: TNote): void;
}

/**
 * Компонент всех заметок
 */
const Notes: FunctionComponent<INotes> = (props) => {
  const { notes, isInitialized, createNote } = props;

  if (!isInitialized) {
    return (
      <div className={s.wrapper}>
        <div className={s.preloader}>
          <Preloader />
        </div>
      </div>
    );
  }

  const textareaOnChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Создавать объекты желательно не в этом месте, но я поленился и сделал так...
    const newNote: TNote = {
      id: uuidv1(),
      title: e.target.value,
      isNew: true,
    };
    createNote(newNote);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.addNote}>
        <span></span>
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
