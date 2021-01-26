import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyB13s-v7oAoj0d11LLHgO7ITff_wmPB6Sk',
  authDomain: 'crwn-db-f23d5.firebaseapp.com',
  projectId: 'crwn-db-f23d5',
  storageBucket: 'crwn-db-f23d5.appspot.com',
  messagingSenderId: '104295785647',
  appId: '1:104295785647:web:01d7d918f9ed5e1891205a',
  measurementId: 'G-G1LWTRPG39'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
