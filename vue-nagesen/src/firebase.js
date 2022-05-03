import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAP4m_IuXbQQilfR6v27J2aGvzEG7saMuA",
    authDomain: "vue-nagesen-1d95f.firebaseapp.com",
    databaseURL: "https://vue-nagesen-1d95f-default-rtdb.firebaseio.com",
    projectId: "vue-nagesen-1d95f",
    storageBucket: "vue-nagesen-1d95f.appspot.com",
    messagingSenderId: "327635626580",
    appId: "1:327635626580:web:e210ead86e3db04586dbc1"
};
  

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()