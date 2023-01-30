import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Movielist from './components/Movielist/Movielist';
import Home from './pages/Home/Home';
import MovieDetailsPage from './pages/MovieDetailspage/MovieDetailspage';

function App() {
  return (
    <div className='text-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/:id' element={<MovieDetailsPage />}></Route>
        <Route path='/movies/:type' element={<Movielist />}></Route>
        <Route path='/*' element={<h1>Error page</h1>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
