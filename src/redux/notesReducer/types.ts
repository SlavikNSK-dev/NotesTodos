import { TBaseThunk } from './../index';

export enum ENoteActionsTypes {
  INIT_NOTES = 'NOTES/INIT_NOTES',
  CREATE_NOTE = 'NOTES/CREATE_NOTE',
  UPDATE_NOTE_TITLE = 'NOTES/UPDATE_NOTE_TITLE',
  DELETE_NOTE = 'NOTES/DELETE_NOTE',
  MAKE_OLD_NOTE = 'NOTES/MAKE_OLD_NOTE',
}

export type TNote = {
  id: string;
  title: string;
  isNew?: boolean;
  todosCount?: number;
};

export type TNotes = {
  byId: {
    [id: string]: TNote;
  };
  allIds: string[];
};

// Тип стейта
export type TNotesState = {
  notes: TNotes;
};

// Типы экшенов
export type TInitNotesAC = {
  type: ENoteActionsTypes.INIT_NOTES;
  notes: TNotes;
};

export type TCreateNoteAC = {
  type: ENoteActionsTypes.CREATE_NOTE;
  note: TNote;
};

export type TUpdateNoteTitleAC = {
  type: ENoteActionsTypes.UPDATE_NOTE_TITLE;
  noteId: string;
  title: string;
};

export type TDeleteNoteAC = {
  type: ENoteActionsTypes.DELETE_NOTE;
  noteId: string;
};

export type TMakeOldNoteAC = {
  type: ENoteActionsTypes.MAKE_OLD_NOTE;
  noteId: string;
};

// Общие типы для редюсера
export type TNotesActions =
  | TInitNotesAC
  | TCreateNoteAC
  | TUpdateNoteTitleAC
  | TDeleteNoteAC
  | TMakeOldNoteAC;
export type TNotesThunks = TBaseThunk<TNotesActions>;
