
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<Gallery />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/studio-listing' element={<Gallery />}/>
        <Route path='/contact' element={<Gallery />}/>
        <Route path='/blogs' element={<Gallery />}/>
        <Route path='/career' element={<Gallery />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
