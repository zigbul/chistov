import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './Pages/MainPage';
import MenuPage from './Pages/MenuPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="menu" element={<MenuPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
