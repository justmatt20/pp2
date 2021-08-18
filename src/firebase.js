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

  const firebaseConfig = {
    apiKey: "AIzaSyA3lE134cCnvO2wYbF37i8ILadTMAZIYtM",
    authDomain: "personal-project-part-2.firebaseapp.com",
    projectId: "personal-project-part-2",
    storageBucket: "personal-project-part-2.appspot.com",
    messagingSenderId: "66891508397",
    appId: "1:66891508397:web:ce2f593682ebacaa9a7424",
    measurementId: "G-VDDQYVKL63"
  };

    if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db; 

