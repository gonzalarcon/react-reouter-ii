import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Pokemones from './Views/Pokemones';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pokemones/' element={<Pokemones/>}/>
                <Route path='/pokemon/:id' element={<Pokemones/>}/>
            </Routes>
        </BrowserRouter>
  
    </div>
  );
}

export default App;
