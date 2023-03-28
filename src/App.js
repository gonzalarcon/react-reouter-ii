import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Pokemones from './Views/Pokemones';
import { PokemonDetalle } from './Views/PokemonDetalle'



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pokemones' element={<Pokemones/>}/>
                <Route path='/pokemones/:id' element={<PokemonDetalle/>}/>
            </Routes>
        </BrowserRouter>
  
    </div>
  );
}

export default App;
