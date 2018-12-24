import { db } from './firebase';

// Create
export const createNote = (title, content) => {
  return db.ref('notes').push({ title, content });
};

// Read
export const getNotes = cb => db.ref('notes').on('value', cb);

// Update
export const updateNote = (id, title = '', content = '', cb) =>
  db.ref(`notes/${id}`).update({ title, content }, cb);

// Delete
export const deleteNote = (id, ref) => db.ref(`items/${id}/${ref}`).remove();
