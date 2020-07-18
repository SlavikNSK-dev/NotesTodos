import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
// import types
import { TNotes } from '../../redux/notesReducer/types';
import { TAppState } from '../../redux/index';
// import components
import Preloader from '../Preloader/Preloader';
import Note from '../Note/Note';
import MyTextarea from '../MyTextarea/MyTextarea';
// other imports
import { createNote } from './../../redux/notesReducer/thunks';
import { getIsInitializedApp } from '../../redux/appReducer/selectors';
import s from './Notes.module.scss';
import { getNotes } from 'src/redux/notesReducer/selectors';

export interface IOwnProps {}
interface IStateProps {
  notes: TNotes;
  isInitialized: boolean;
}
interface IDispatchProps {
  createNote(title: string): void;
}

export type TProps = IOwnProps & IStateProps & IDispatchProps;

/**
 * Компонент всех заметок
 */
const Notes: FunctionComponent<TProps> = (props): JSX.Element => {
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

  // Mapped arrays
  const mappedNotes = notes.allIds.map((noteId) => {
    return <Note key={noteId} note={notes.byId[noteId]} />;
  });

  return (
    <div className={s.wrapper}>
      <div className={s.addNote}>
        <MyTextarea placeholder={'New note...'} onChange={textareaOnChangeHandler} />
      </div>
      {mappedNotes}
    </div>
  );
};

const mapStateToProps = (state: TAppState, ownProps: IOwnProps): IStateProps => ({
  notes: getNotes(state),
  isInitialized: getIsInitializedApp(state),
});

export default connect<IStateProps, IDispatchProps, IOwnProps, TAppState>(mapStateToProps, {
  createNote,
} as IDispatchProps)(Notes);
