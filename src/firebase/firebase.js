import firebase from 'firebase/app';
import 'firebase/database';

if (!firebase.apps.length) {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyCshskVQq-6CbJ3DKZL0DE_bkRXysRypxg',
    authDomain: 'keep-vue-clone.firebaseapp.com',
    databaseURL: 'https://keep-vue-clone.firebaseio.com',
    projectId: 'keep-vue-clone',
    storageBucket: 'keep-vue-clone.appspot.com',
    messagingSenderId: '691249532009',
  };

  firebase.initializeApp(config);
}

const db = firebase.database();

export { db };
