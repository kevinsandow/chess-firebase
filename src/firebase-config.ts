import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6jFOjcml2axsnhtVkhTGRJqMakGLgwTA",
  authDomain: "chess-7d79c.firebaseapp.com",
  projectId: "chess-7d79c",
  storageBucket: "chess-7d79c.appspot.com",
  messagingSenderId: "69538448123",
  appId: "1:69538448123:web:9513f3e2b752c932c6e65e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firestore = getFirestore(app)

if (location.hostname === 'localhost2') {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
  connectFirestoreEmulator(firestore, 'localhost', 5000)
}
