import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB3N-YUrQs2-9WJiF4Ih2Jh7Az38SzSWOY',
  authDomain: 'slack-clone-209b7.firebaseapp.com',
  projectId: 'slack-clone-209b7',
  storageBucket: 'slack-clone-209b7.appspot.com',
  messagingSenderId: '221406190148',
  appId: '1:221406190148:web:db544df30d23778c113a11',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
