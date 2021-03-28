import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCoCYkjt8kLvxhDACfTOkbkSQh7HaC8PZY",
  authDomain: "crown-1-a8cfd.firebaseapp.com",
  projectId: "crown-1-a8cfd",
  storageBucket: "crown-1-a8cfd.appspot.com",
  messagingSenderId: "180129077060",
  appId: "1:180129077060:web:226d6f440bb35cee8da911",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
