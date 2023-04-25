import {useCallback, useEffect, useMemo, useState} from "react";
import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User} from "firebase/auth";

import {userContext, UserContext} from "../hooks/useUser"
import useFirebase from "../hooks/useFirebase";

export default function UserProvider({children}) {
  const {auth} = useFirebase()

  const [authState, setAuthState] = useState<{ user: User | undefined | null, error: Error | undefined }>({
    user: undefined,
    error: undefined
  })

  useEffect(() => onAuthStateChanged(
    auth,
    (user) => setAuthState({user, error: undefined}),
    (error) => setAuthState({user: null, error}),
  ), [auth])

  const login = useCallback(() => signInWithPopup(auth, new GoogleAuthProvider()), [auth])

  const logout = useCallback(() => signOut(auth), [auth])

  const value = useMemo<UserContext>(
    () => ({
      authCompleted: authState.user !== undefined,
      authError: authState.error,
      currentUser: authState.user ?? undefined,
      login,
      logout,
    }),
    [authState.error, authState.user, login, logout]
  )

  return <userContext.Provider value={value}>{children}</userContext.Provider>
}
