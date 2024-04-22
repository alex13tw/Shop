import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Carts from './components/Carts';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <div>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Carts/>}/>
         </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;
