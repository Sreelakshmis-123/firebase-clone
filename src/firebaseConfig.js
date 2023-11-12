import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCX9JcIdNmd0UZg-yG2Jbw4ov8YoPZ6IfI",
  authDomain: "fir-clone-d1c70.firebaseapp.com",
  projectId: "fir-clone-d1c70",
  storageBucket: "fir-clone-d1c70.appspot.com",
  messagingSenderId: "609575151014",
  appId: "1:609575151014:web:ccdeef0c4cdcae96a21b67",
  measurementId: "G-R81XKZJMVB"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)