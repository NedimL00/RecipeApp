import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { RecipeProvider } from './context/recipe/RecipeContext';
import { AlertProvider } from './context/alert/AlertContext';


function App() {



  return (
    <RecipeProvider>
      <AlertProvider>
        <Router>
          <div>
            <Navbar />
              <main>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/contact' element={<Contact/>} />
                  {/* <Route path='/recipe' element={<Recipe/>} /> */}
                  <Route path='/*' element={<NotFound />} />
                </Routes>
              </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </RecipeProvider>
    
    
  );
}

export default App;
