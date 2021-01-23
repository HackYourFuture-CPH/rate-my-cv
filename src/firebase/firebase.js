import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyCpbszBgq7uc-FjOgm_356uJseg9ESQ30g',
  authDomain: 'rate-my-cv-e7feb.firebaseapp.com',
  projectId: 'rate-my-cv-e7feb',
  storageBucket: 'rate-my-cv-e7feb.appspot.com',
  messagingSenderId: '85538322135',
  appId: '1:85538322135:web:3ac72545366db4d7ac6292',
  measurementId: 'G-W7HZEMWE59',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
