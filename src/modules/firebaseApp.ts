import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import firebaseConfig from "./config";
// import { getAnalytics } from "firebase/analytics";

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app)
export default firestore
