import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlYD4KUNMrqEw3qvqSzZGvUbVkTivxClQ",
  authDomain: "facebook-3bbed.firebaseapp.com",
  projectId: "facebook-3bbed",
  storageBucket: "facebook-3bbed.appspot.com",
  messagingSenderId: "384096672962",
  appId: "1:384096672962:web:9eef5a5f98ec326e26ef5b",
  measurementId: "G-V58N6WKZN7"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();



  export { auth, provider};

  
export default db;
