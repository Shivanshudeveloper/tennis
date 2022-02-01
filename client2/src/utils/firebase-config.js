// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSEx2-ykPTb70keLZh3LAuDtQT2VyCsco",
  authDomain: "evencloud-26d32.firebaseapp.com",
  databaseURL: "https://evencloud-26d32.firebaseio.com",
  projectId: "evencloud-26d32",
  storageBucket: "evencloud-26d32.appspot.com",
  messagingSenderId: "599725599274",
  appId: "1:599725599274:web:8f9a716ca577fc72a1f153",
  measurementId: "G-VSJNQ5LYK5",
};

// Initialize Firebase
// if (!firebase.apps.length) {
export const app = initializeApp(firebaseConfig);
// }
// const analytics = getAnalytics(app);

// export default firebase;
