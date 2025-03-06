import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import ArticlesIndex from './pages/ArticlesIndex';
import Register from './pages/Register';
import Topbar from './components/Topbar';
import { UserProvider } from './context/UserContext';

function App() {
    return (
      <UserProvider>    
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path='/' element={<ArticlesIndex />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      </UserProvider>
  )
}

export default App
