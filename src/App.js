import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';


function App() {
  return (
    <>
      <Router>
      <Header />
      <main className="container content">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path ='/about' element={<About />}/>
          <Route path='/caregory/:name' element={<Category />}/>
          <Route path='/meal/:id' element={<Recipe />}/>
          <Route element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      </Router>
    </>
  );
}

export default App;
