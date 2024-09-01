import { lazy } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from './context/AuthProvider'

// import Home from './pages/home/Home'
// import Preview from './pages/preview/Preview'
// import Header from './pages/Header'
// import Auth from './pages/auth/Auth'

const Header = lazy(() => import('./pages/Header'))
const Home = lazy(() => import('./pages/home/Home'))
const Preview = lazy(() => import('./pages/preview/Preview'))
const Auth = lazy(() => import('./pages/auth/Auth'))

const App = () => {

  const [authUser, setAuthUser] = useAuth()
  setAuthUser(authUser)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/auth' element={authUser ? <Navigate to={"/"} /> : <Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
