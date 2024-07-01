
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PagesProjets from './pages/Projet';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Routes>
       <Route path='/P12_Portfolio' element={<Home />}/>
       <Route exact path='/P12_Porfolio/Projet/:id' element={<PagesProjets />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
