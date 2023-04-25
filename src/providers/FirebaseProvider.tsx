import {useMemo} from "react";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

import { firebaseContext, FirebaseContext } from "../hooks/useFirebase"
import firebaseConfig from "../firebase-config"

export default function FirebaseProvider({children}) {
  const app = useMemo(() => initializeApp(firebaseConfig), [])
  const auth = useMemo(() => getAuth(app), [app])
  const firestore = useMemo(() => getFirestore(app), [app])

  const value = useMemo<FirebaseContext>(
    () => ({ auth, firestore }),
    [auth, firestore]
  )

  return <firebaseContext.Provider value={value}>{children}</firebaseContext.Provider>
}
