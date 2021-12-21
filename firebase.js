// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8zPHx2bxMDML1sVoiZpi0POZrESyGo7U",
  authDomain: "twitter-clone-bd935.firebaseapp.com",
  projectId: "twitter-clone-bd935",
  storageBucket: "twitter-clone-bd935.appspot.com",
  messagingSenderId: "167452993155",
  appId: "1:167452993155:web:560da3c9d86c2e22f21db6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
