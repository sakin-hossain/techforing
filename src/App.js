import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Auth from './Pages/Auth/Auth';
import CreateJobs from './Pages/Home/CreateJobs/CreateJobs';
import Home from './Pages/Home/Home';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
            <Route path="/createJobs" element={<PrivateRoute><CreateJobs/></PrivateRoute>} />
            <Route path="/login" element={<Auth/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;