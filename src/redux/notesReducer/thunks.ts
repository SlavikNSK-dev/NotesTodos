import { initNotesAC, deleteNoteAC, updateNoteTitleAC, createNoteAC, makeOldNoteAC } from './actions';
import { TNote } from './types';
import { deleteAllTodosByNoteId } from '../todosReducer/thunks';

export const initNotes = (notes: TNote[]) => async (dispatch: any) => {
  await dispatch(initNotesAC(notes));
};

export const createNote = (note: TNote) => async (dispatch: any) => {  
  await dispatch(createNoteAC(note));
};

export const makeOldNote = (noteId: string) => async (dispatch: any) => {  
  await dispatch(makeOldNoteAC(noteId));
};

export const updateNoteTitle = (noteId: string, title: string) => async (dispatch: any) => {
  await dispatch(updateNoteTitleAC(noteId, title));
};

export const deleteNote = (noteId: string) => async (dispatch: any) => {
  await dispatch(deleteNoteAC(noteId));
  await dispatch(deleteAllTodosByNoteId(noteId));
};
