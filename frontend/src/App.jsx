import { Children, useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import SeekHelp from './pages/SeekHelp';
import Postpage from './pages/Postpage';
import Resourspage from './pages/Resourspage';
import OurMession from './pages/OurMession';
import Feed from './pages/Feed';
import { BrowserRouter, Routes, Route, Navigate,useNavigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Share from './pages/Share';
import Post from './pages/Post';
import { CommentsProvider } from './contexts/CommentsContext';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const [authenticated, setAuthenticated] = useState(!!token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
function App() {
  return (
    <>
      <BrowserRouter scrollRestoration='auto'>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/seekhelp' element={<SeekHelp />} />
            <Route path='/posts' element={<Postpage />} />
            <Route path='/rosourses' element={<Resourspage />} />
            <Route path='/ourmession' element={<OurMession />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/share'
              element={
                <ProtectedRoute>
                  <Share />
                </ProtectedRoute>
              }
            />
            <Route path='/post' element={<CommentsProvider><Post /></CommentsProvider>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
