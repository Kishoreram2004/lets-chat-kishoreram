import './App.css'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <div className="p-4 flex h-screen items-center justify-center "> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  )
}

export default App
