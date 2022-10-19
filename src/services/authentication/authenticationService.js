import firebase from "firebase/compat/app";

export const loginRequest = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const registerRequest = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};
