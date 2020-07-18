import {
  TCreateNoteAC,
  TDeleteNoteAC,
  ENoteActionsTypes,
  TNote,
  TInitNotesAC,
  TNotes,
  TUpdateNoteTitleAC,
  TMakeOldNoteAC,
} from './types';

export const initNotesAC = (notes: TNotes): TInitNotesAC => ({
  type: ENoteActionsTypes.INIT_NOTES,
  notes,
});

export const createNoteAC = (note: TNote): TCreateNoteAC => ({
  type: ENoteActionsTypes.CREATE_NOTE,
  note,
});

export const updateNoteTitleAC = (noteId: string, title: string): TUpdateNoteTitleAC => ({
  type: ENoteActionsTypes.UPDATE_NOTE_TITLE,
  noteId,
  title,
});

export const deleteNoteAC = (noteId: string): TDeleteNoteAC => ({
  type: ENoteActionsTypes.DELETE_NOTE,
  noteId,
});

export const makeOldNoteAC = (noteId: string): TMakeOldNoteAC => ({
  type: ENoteActionsTypes.MAKE_OLD_NOTE,
  noteId,
});
