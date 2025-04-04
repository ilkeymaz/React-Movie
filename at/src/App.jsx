import { Route } from 'react-router-dom';
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import {Routes} from 'react-router-dom';
import Favourites from './pages/Favourites';
import NavBar from './components/NavBar';

function App() {
  return (
   
    <div>
      <NavBar></NavBar>
      <main className='main-content'>
        <Routes>
        <Route path= "/"element={ <Home />}/>
        <Route path= "/favourites"element={ <Favourites />}/>
        </Routes>
      </main>
  
    </div>
  )
}

export default App;
