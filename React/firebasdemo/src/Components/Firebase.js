import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp(

{
    //use own get key in project settings
    apiKey: "AIzaSyDa02ZXh1sx2uG43IFX9wFj_EElJf7pgBE",
    authDomain: "class-app-340d9.firebaseapp.com",
    projectId: "class-app-340d9",
    storageBucket: "class-app-340d9.appspot.com",
    messagingSenderId: "296706696268",
    appId: "1:296706696268:web:79e161c034e530248100e9"
  });
  export default firebase;
 