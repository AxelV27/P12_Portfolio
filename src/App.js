
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/P12_Portfolio' element={<Home />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
