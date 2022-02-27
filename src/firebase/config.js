import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBjQ1RyB1_cT6L_irXudEEj7EP-ePfD9b0",
    authDomain: "el-games-6eb78.firebaseapp.com",
    projectId: "el-games-6eb78",
    storageBucket: "el-games-6eb78.appspot.com",
    messagingSenderId: "19243222163",
    appId: "1:19243222163:web:0cdf3f548e2c22024e7966"
  };


firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }