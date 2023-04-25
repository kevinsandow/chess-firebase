import {createContext, useContext} from "react";
import {User, UserCredential} from "firebase/auth";

export interface UserContext {
  authCompleted: boolean
  authError?: Error
  currentUser?: User
  login: () => Promise<UserCredential>
  logout: () => Promise<void>
}

export const userContext = createContext<UserContext | undefined>(undefined)

export default function useUser() { return useContext(userContext) }
