
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';
import UnderDevelopment from './components/UnderDevelopment';
import About from './pages/about/About';
import Career from './pages/career/Career';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <UnderDevelopment />
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/studio-listing' element={<Gallery />}/>
        <Route path='/contact' element={<Gallery />}/>
        <Route path='/blogs' element={<Gallery />}/>
        <Route path='/career' element={<Career />}/>

        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
