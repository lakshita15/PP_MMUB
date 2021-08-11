import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage' 
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyAx2V2EHvj2hWpx3x0jY_3IitnxrwePEq4",
    authDomain: "reelsapp-c2ff4.firebaseapp.com",
    projectId: "reelsapp-c2ff4",
    storageBucket: "reelsapp-c2ff4.appspot.com",
    messagingSenderId: "20317043466",
    appId: "1:20317043466:web:5d101b9ec3b2e09abad8f3"
})

export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();
// export default firebase;