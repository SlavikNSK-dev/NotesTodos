import { TAppState } from './../index';
import { TNotes } from './types';

export const getNotes = (state: TAppState): TNotes => state.notes;
