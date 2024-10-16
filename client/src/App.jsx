import './App.css'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext.jsx'

function App() {
  const {authUser} = useAuthContext()
  return (
    
    <div className="p-4 flex h-screen items-center justify-center "> 
        <Routes>
          <Route path="/" element={authUser?<Home />:<Navigate to ="/login" />} />
          <Route path="/login" element={authUser?<Navigate to="/"/>:<Login />} />
          <Route path="/signup" element={authUser? <Navigate to ="/" />:<Signup />} />
        </Routes>
    </div>
  )
}

export default App
