import {
  TNote,
  TInitNotesAC,
  TCreateNoteAC,
  TMakeOldNoteAC,
  TUpdateNoteTitleAC,
  TDeleteNoteAC,
} from './types';

export const initNotesAC = (notes: TNote[]): TInitNotesAC => ({
  type: 'INIT_NOTES',
  notes,
});

export const createNoteAC = (note: TNote): TCreateNoteAC => ({
  type: 'CREATE_NOTE',
  note,
});

export const makeOldNoteAC = (noteId: string): TMakeOldNoteAC => ({
  type: 'MAKE_OLD_NOTE',
  noteId,
});

export const updateNoteTitleAC = (noteId: string, title: string): TUpdateNoteTitleAC => ({
  type: 'UPDATE_NOTE_TITLE',
  noteId,
  title,
});

export const deleteNoteAC = (noteId: string): TDeleteNoteAC => ({
  type: 'DELETE_NOTE',
  noteId,
});
