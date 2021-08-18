import firebase from "firebase";
require('dotenv').config();

// const {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE, MESSAGING, APP_ID, MEASUREMENT} = process.env
// const firebaseConfig = {
//     apiKey: API_KEY,
//     authDomain: AUTH_DOMAIN,
//     projectId: PROJECT_ID,
//     storageBucket: STORAGE,
//     messagingSenderId: MESSAGING,
//     appId: APP_ID,
//     measurementId: MEASUREMENT
//   };

  // if (firebase.apps.length === 0) {
  //   firebase.initializeApp(firebaseConfig);
  // }

 ADD FIREBASE CONFIG

  //   if (firebase.apps.length === 0) {
  //   firebase.initializeApp(firebaseConfig);
  // }
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db; 

