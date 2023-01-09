import './App.css';
import {Routes, Route} from 'react-router-dom'
import Hero from './Routes/Hero';
import About from './Routes/About';
import Rules from './Routes/Rules';
import Game from './Routes/Game';
import Stats from './Routes/Stats';
import Profile from './Routes/Profile';
import BottomNav from './Components/BottomNav';
import Nav from './Components/Nav';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Demo from './Routes/Demo';

function App() {
  return (
    <>
    <Nav>
    <BottomNav>

      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/game' element={<Game />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/demo' element={<Demo />} />


      </Routes>
    </BottomNav>
    </Nav>
    </>
  );
}

export default App;
