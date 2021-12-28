import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import SideMenu from './Pages/Shared/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <SideMenu/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;