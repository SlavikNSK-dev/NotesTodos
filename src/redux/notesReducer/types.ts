import { TBaseThunk } from '..';

export type TNote = {
  id: string;
  title: string;
  isNew?: boolean;
};

// Тип стейта
export type TNotesState = {
  notes: TNote[];
};

// Типы экшенов
export type TInitNotesAC = {
  type: 'INIT_NOTES';
  notes: TNote[];
};

export type TCreateNoteAC = {
  type: 'CREATE_NOTE';
  note: TNote;
};

export type TMakeOldNoteAC = {
  type: 'MAKE_OLD_NOTE';
  noteId: string;
};

export type TUpdateNoteTitleAC = {
  type: 'UPDATE_NOTE_TITLE';
  noteId: string;
  title: string;
};

export type TDeleteNoteAC = {
  type: 'DELETE_NOTE';
  noteId: string;
};

// Общие типы для редюсера
export type TNotesActions =
  | TInitNotesAC
  | TCreateNoteAC
  | TMakeOldNoteAC
  | TUpdateNoteTitleAC
  | TDeleteNoteAC;
export type TNotesThunks = TBaseThunk<TNotesActions>;
