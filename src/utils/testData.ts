import { TNote } from '../redux/notesReducer/types';
import { TTodo } from '../redux/todosReducer/types';

// Тестовый массив Notes
export const notes: TNote[] = [
  {
    id: '6ebc3c1c-1edb-4057-938c-488b6927aded',
    title: 'Note title',
    isNew: false,
    todosCount: 0,
  },
  {
    id: '1de42d37-4335-4080-9051-6bf290b9ff5d',
    title: 'Note title length = 2 rows, for test for test for test',
    isNew: false,
    todosCount: 0,
  },
];

// Тестовый массив Todos
export const todos: TTodo[] = [
  {
    id: '70783e77-3681-46c5-991d-492adfc4d5dd',
    noteId: '6ebc3c1c-1edb-4057-938c-488b6927aded',
    complited: false,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    id: '576a7e91-bf29-48a9-b9b7-ec7d434525e6',
    noteId: '6ebc3c1c-1edb-4057-938c-488b6927aded',
    complited: true,
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quis nesciunt deleniti culpa. Ad enim reprehenderit ea repellendus aliquam a.',
  },
  {
    id: '90acfb53-b3ba-44ba-b17d-4e625c0a9ae8',
    noteId: '1de42d37-4335-4080-9051-6bf290b9ff5d',
    complited: false,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    id: '28315501-cc9f-46c6-823e-ac9ed25ef6fc',
    noteId: '1de42d37-4335-4080-9051-6bf290b9ff5d',
    complited: true,
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quis nesciunt deleniti culpa. Ad enim reprehenderit ea repellendus aliquam a.',
  },
  {
    id: '13290c59-e9b2-4d35-b5b9-5d54a883468f',
    noteId: '1de42d37-4335-4080-9051-6bf290b9ff5d',
    complited: false,
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
];
