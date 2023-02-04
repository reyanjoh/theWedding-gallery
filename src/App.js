
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
        <Route path='/gallery' element={<Gallery />}/>
        {/* <Route path='/contact' />
        <Route path='/career' />
        <Route path='/blogs' /> */}
      </Routes>

      <Footer />


    </div>
  );
}

export default App;
