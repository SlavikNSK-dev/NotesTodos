import { v1 as uuidv1 } from 'uuid';
import {
  deleteNoteAC,
  createNoteAC,
  initNotesAC,
  updateNoteTitleAC,
  makeOldNoteAC,
} from './actions';
import { TNote, TNotesThunks, TNotes } from './types';

// Устанавливает соответствие стейта с данными с сервера (в данном случае с локальными данными)
export const initNotes = (notes: TNotes): TNotesThunks => async (dispatch) => {
  dispatch(initNotesAC(notes));
};

// Создает новую заметку
export const createNote = (title: string): TNotesThunks => async (dispatch) => {
  const newNote: TNote = {
    id: uuidv1(),
    title: title,
    isNew: true,
  };
  dispatch(createNoteAC(newNote));
};

// Обновляет наименование заметки
export const updateNoteTitle = (noteId: string, title: string): TNotesThunks => async (
  dispatch,
) => {
  dispatch(updateNoteTitleAC(noteId, title));
};

// Удаляет заметку
export const deleteNote = (noteId: string): TNotesThunks => async (dispatch) => {
  dispatch(deleteNoteAC(noteId));
};

// Снимает признак новизны заметки (нужен для перефокусировки полей ввода)
export const makeOldNote = (noteId: string): TNotesThunks => async (dispatch) => {
  dispatch(makeOldNoteAC(noteId));
};
