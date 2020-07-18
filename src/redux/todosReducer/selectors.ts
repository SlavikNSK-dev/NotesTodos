import { TAppState } from './../index';
import { TTodos } from './types';
import { createSelector } from 'reselect';

// Common
export const getId = (state: TAppState, id: string): string => id;

//
export const getTodos = (state: TAppState): TTodos => state.todos.todos;

export const getTodosByNoteId = createSelector(
  [getTodos, getId],
  (todos: TTodos, noteId: string) => {
    return todos.allIds.reduce(
      (obj: TTodos, id: string): TTodos => {
        if (todos.byId[id].noteId === noteId) {
          return {
            ...obj,
            byId: {
              ...obj.byId,
              [id]: todos.byId[id],
            },
            allIds: [...obj.allIds, id],
          };
        }
        return { ...obj };
      },
      { byId: {}, allIds: [] } as TTodos,
    );
  },
);
