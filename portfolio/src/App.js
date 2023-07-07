import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import LandingPage from './pages/LandingPage';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import AboutUs from './pages/AboutMe';
import ImageUpload from './pages/ImageUpload';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path='/' exact Component={LandingPage} />
        <Route path='/offers' Component={Offers} />
        <Route path='/about' Component={AboutUs} />
        <Route path='/contact' Component={Contact} />
        <Route path='/impressum' Component={Impressum} />
        <Route path='/upload' Component={ImageUpload}/>
        </Routes>
    </Router>
  );
}
export default App;