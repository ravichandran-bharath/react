import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCa-JslTsjSOrNxgqpe8dpGHC6DgaCdSZs",
    authDomain: "capsule-7372b.firebaseapp.com",
    databaseURL: "https://capsule-7372b.firebaseio.com",
    projectId: "capsule-7372b",
    storageBucket: "",
    messagingSenderId: "411937353355"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth