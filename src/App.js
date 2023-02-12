
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './components/NotFound';
import UnderDevelopment from './components/UnderDevelopment';
import ApplicationForm from './pages/career/applicationForm/ApplicationForm';
import About from './pages/about/About';
// import ApplicationForm from './pages/career/applicationForm/ApplicationForm';
import Career from './pages/career/Career';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import GalleryPost from './pages/gallery/components/galleryPost/GalleryPost';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <UnderDevelopment />
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>

        <Route  path='/gallery'>
          <Route index element={<Gallery />}/>
          <Route path='/gallery/:id' element={<GalleryPost />}/>
          <Route path='/gallery/:studio/:id' element={<GalleryPost />}/>

          {/* <Route path='/post/:id' element={<GalleryPost />}/> */}
          
        </Route>

        {/* <Route path='/blogs' element={<Gallery />}/> */}

        {/* <Route path='/studio-listing' element={<StudioListing />}/> */}
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>

        <Route path='/career'>
          <Route index element={<Career />} />
          <Route path='/career/application-form' element={<ApplicationForm />} />
        </Route>
          

        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
