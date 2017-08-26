import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDBWo46PauIwaZ6h4dNXWxsQCXCifsLEMg",
    authDomain: "myawesomeproject-d9965.firebaseapp.com",
    databaseURL: "https://myawesomeproject-d9965.firebaseio.com",
    projectId: "myawesomeproject-d9965",
    storageBucket: "myawesomeproject-d9965.appspot.com",
    messagingSenderId: "393497960778"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth