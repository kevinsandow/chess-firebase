import {Routes, Route, BrowserRouter} from 'react-router-dom'

import useUser from "./hooks/useUser";
import Home from './pages/Home'

function App() {
  const { authCompleted } = useUser()

  if (!authCompleted) {
    return <div>Checking for authentication...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
