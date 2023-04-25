import {createContext, useContext} from "react";
import {Auth} from "firebase/auth";
import {Firestore} from "firebase/firestore";

export interface FirebaseContext {
  auth: Auth
  firestore: Firestore
}

export const firebaseContext = createContext<FirebaseContext | undefined>(undefined)

export default function useFirebase() { return useContext(firebaseContext) }
