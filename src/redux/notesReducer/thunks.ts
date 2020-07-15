import { v1 as uuidv1 } from 'uuid';
import {
  initNotesAC,
  deleteNoteAC,
  updateNoteTitleAC,
  createNoteAC,
  makeOldNoteAC,
} from './actions';
import { TNote, TNotesThunks } from './types';
import { deleteAllTodosByNoteId } from '../todosReducer/thunks';

export const initNotes = (notes: TNote[]): TNotesThunks => async (dispatch) => {
  dispatch(initNotesAC(notes));
};

export const createNote = (title: string): TNotesThunks => async (dispatch) => {
  const newNote: TNote = {
    id: uuidv1(),
    title: title,
    isNew: true,
  };
  dispatch(createNoteAC(newNote));
};

export const makeOldNote = (noteId: string): TNotesThunks => async (dispatch) => {
  dispatch(makeOldNoteAC(noteId));
};

export const updateNoteTitle = (noteId: string, title: string): TNotesThunks => async (
  dispatch,
) => {
  dispatch(updateNoteTitleAC(noteId, title));
};

export const deleteNote = (noteId: string): TNotesThunks => async (dispatch) => {
  dispatch(deleteNoteAC(noteId));
  dispatch(deleteAllTodosByNoteId(noteId));
};
