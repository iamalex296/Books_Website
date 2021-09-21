import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjaXdpitRmXJtRZmvy-R4KefyerkovVZw",
  authDomain: "bookswebsiteauthentification.firebaseapp.com",
  // databaseURL: "",
  projectId: "bookswebsiteauthentification",
  storageBucket: "bookswebsiteauthentification.appspot.com",
  messagingSenderId: "773931450367",
  appId: "1:773931450367:web:fb60e5a0101268d192f1ca",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
