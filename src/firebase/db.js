import { db } from './firebase';

// Create
export const createNote = (title, content) => {
  return db.ref('notes').push({ title, content });
};

// Read
export const getNotes = cb => db.ref('notes').on('value', cb);

// Update
export const updateNote = (id, title = '', content = '', cb) => {
  const noteData = {
    id,
    title,
    content,
  };

  // Get a key for a new Post.
  const newNoteKey = db
    .ref()
    .child('notes')
    .push().key;

  console.log(newNoteKey);

  const updates = {};
  updates[`/posts/${newNoteKey}`] = noteData;

  return db.ref().update(updates);

  // db.ref(`notes/${id}`).update(newData, cb);
};

// Delete
export const deleteNote = (id, ref) => db.ref(`items/${id}/${ref}`).remove();
