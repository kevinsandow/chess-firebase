import useUser from "../hooks/useUser";

export default function Home() {
  const { currentUser, login, logout } = useUser()

  return <>
    <div>
      {!currentUser && (
        <button onClick={login}>Login</button>
      )}
      {currentUser && (
        <>
          Current User: {currentUser.displayName} ({currentUser.uid})
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  </>
}

