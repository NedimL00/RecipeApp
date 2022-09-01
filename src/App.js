import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { RecipeProvider } from './context/recipe/RecipeContext';
import { AlertProvider } from './context/alert/AlertContext';
import RecipeTutorial from './components/recipes/RecipeTutorial';
import { LikeProvider } from './context/like/LikeContext';
import LikedRecipes from './components/recipes/LikedRecipes';


function App() {


  return (
    <RecipeProvider>
      <AlertProvider>
        <LikeProvider>
          <BrowserRouter>
            <LikedRecipes/>
              <Navbar />
              <main>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='tutorial/:recipeID' element={<RecipeTutorial/>} />
                  <Route path='about' element={<About/>} />
                  <Route path='contact' element={<Contact/>} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
          </BrowserRouter>
        </LikeProvider>
      </AlertProvider>
    </RecipeProvider>
    
    
  );
}

export default App;
