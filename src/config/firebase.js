// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmj6R4OmmC9lqj6qaLGvgiDuf07EkxhKE",
  authDomain: "mobile-app-a10ab.firebaseapp.com",
  projectId: "mobile-app-a10ab",
  storageBucket: "mobile-app-a10ab.appspot.com",
  messagingSenderId: "666422164428",
  appId: "1:666422164428:web:b5ed9797a7794de894bb69",
  measurementId: "G-3JQWLXG28R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const firestore=getFirestore(app)
const analytics = getAnalytics(app);
export {auth,firestore,analytics}
// let app
// if(firebase.apps.lenght===0){
//     app=firebase.initializeApp(firebaseConfig)
// }
// else{
//     app=firebase.app()   
// }
// const auth=firebase.auth()
// export {auth};