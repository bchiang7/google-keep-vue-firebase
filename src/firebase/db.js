import { db } from './firebase';

// Create
export const createNote = (title, content) => {
  return db.ref('notes').push({ title, content });
};

// Read
export const getNotes = cb => db.ref('notes').on('value', cb);
// export const getNotes = cb => db.ref('notes').on('child_added', cb);

// Update

// Delete
