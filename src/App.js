import { BrowserRouter, Routes } from 'react-router-dom';

import NavBar from './pages/restaurant/components/navBar';
import {getRoutes} from './pages/restaurant/routes/routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <section className='body-container'>
        <Routes>
          {getRoutes}
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
